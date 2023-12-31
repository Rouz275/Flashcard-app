import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck, createCard } from '../utils/api';
import CardForm from './CardForm';

function AddCard() {
  const mountedRef = useRef(false);
  const initialFormState = {
    id: '',
    front: '',
    back: '',
    deckId: '',
  };
  const [deck, setDeck] = useState({
    name: 'loading...',
    description: '',
    cards: [],
  });
  const [newCardData, setNewCardData] = useState(initialFormState);
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        if (mountedRef.current) {
          setDeck(() => response);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          throw error;
        }
      }
    }
    loadDeck();
    return () => {
      abortController.abort();
    };
  }, [deckId]);

  const changeHandler = ({ target }) => {
    setNewCardData((currentCardData) => ({
      ...currentCardData,
      [target.name]: target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createCard(deckId, newCardData);
    setNewCardData(initialFormState);
    history.go(0);
  };
  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>
              <i className='fas fa-home'></i> Home
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Add Card
          </li>
        </ol>
      </nav>
      <h2 className='my-4'>
        {deck.name}: <span>Add Card</span>
      </h2>
      <CardForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        newCardData={newCardData}
        deckId={deckId}
      />
    </div>
  );
}

export default AddCard;
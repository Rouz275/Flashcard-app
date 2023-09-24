import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { readDeck, readCard, updateCard } from '../utils/api';
import CardForm from './CardForm';

function EditCard() {
  const mountedRef = useRef(false);
  const { deckId, cardId } = useParams();
  const history = useHistory();

  const initialCardState = { id: '', front: '', back: '', deckId: '' };
  const [deck, setDeck] = useState({
    name: 'loading...',
    description: '',
  });
  const [editCard, setEditCard] = useState(initialCardState);

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

  useEffect(() => {
    const abortController = new AbortController();
    async function loadCard() {
      try {
        const response = await readCard(cardId, abortController.signal);
        if (mountedRef.current) {
          setEditCard(() => response);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          throw error;
        }
      }
    }
    loadCard();
    return () => {
      abortController.abort();
    };
  }, [cardId]);

  const changeHandler = ({ target }) => {
    setEditCard((currentState) => ({
      ...currentState,
      [target.name]: target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateCard(editCard);
    setEditCard(initialCardState);
    history.push(`/decks/${deckId}`);
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
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <CardForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        newCardData={editCard}
        deckId={deckId}
      />
    </div>
  );
}

export default EditCard;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteDeck, listDecks } from '../utils/api/index.js';

function Home() {
  const history = useHistory();
  const mountedRef = useRef(false);
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadDecks() {
      try {
        const response = await listDecks();
        if (mountedRef.current) {
          setDecks((_) => [...response]);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          throw error;
        }
      }
    }
    loadDecks();

    return () => abortController.abort();
  }, []);

  const deleteHandler = async (deckId) => {
    const confirmation = window.confirm(
      'Delete this deck? You will not be able to recover it.'
    );
    if (confirmation) {
      await deleteDeck(deckId);
      history.go(0);
    }
  };

  const allDecks = decks.map((deck) => (
    <div
      key={deck.id}
      className='card'
      style={{ width: '100%', marginTop: '15px', marginBottom: '30px' }}
    >
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h4 className='card-title'>{deck.name}</h4>
          <p>{deck.cards.length} cards</p>
        </div>
        <p className='card-text'>{deck.description}</p>
        <div className='d-flex justify-content-between'>
          <Link to={`/decks/${deck.id}`} className='card-link'>
            <button
              className='btn btn-secondary'
              onClick={() => history.push(`/decks/${deck.id}`)}
            >
              <i className='fas fa-eye'></i> View
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`} className='card-link'>
            <button
              className='btn btn-primary'
              onClick={() => history.push(`/decks/${deck.id}/study`)}
            >
              <i className='fas fa-book'></i> Study
            </button>
          </Link>
          <Link to='#' className='card-link'>
            <button
              className='btn btn-danger'
              onClick={() => deleteHandler(deck.id)}
            >
              <i className='fas fa-trash'></i> Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return decks ? (
    <div>{allDecks}</div>
  ) : (
    <p>Loading...</p>
  );
}

export default Home;
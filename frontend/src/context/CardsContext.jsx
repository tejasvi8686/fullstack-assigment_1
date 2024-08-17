import React, { createContext, useState, useEffect } from 'react';
import axios from '../axios';

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Failed to fetch cards:', error);
      }
    };
    fetchCards();
  }, []);

  return (
    <CardsContext.Provider value={{ cards }}>
      {children}
    </CardsContext.Provider>
  );
};

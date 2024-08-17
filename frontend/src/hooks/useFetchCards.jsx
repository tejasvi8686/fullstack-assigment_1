import { useState, useEffect } from 'react';
import axios from '../axios';

const useFetchCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('/cards');
        setCards(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  return { cards, loading, error };
};

export default useFetchCards;

import React, { useContext, useState } from 'react';
import HelpCenterCard from './HelpCenterCard';
import { CardsContext } from '../context/CardsContext';
import './HelpCenter.css';

const HelpCenter = () => {
  const { cards } = useContext(CardsContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="help-center">
      <h1>How can we help?</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="cards-container">
        {filteredCards.map((card) => (
          <HelpCenterCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;

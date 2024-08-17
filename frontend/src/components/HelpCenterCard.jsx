import React from 'react';
import './HelpCenterCard.css';

const HelpCenterCard = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.link && <a href={card.link}>Learn more</a>}
    </div>
  );
};

export default HelpCenterCard;

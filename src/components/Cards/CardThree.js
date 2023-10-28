import React from 'react';
import '../../styles/Card.css';

const Card = ({ cardInfo }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>{cardInfo.name}</h2>
        <p>{cardInfo.description}</p>
      </div>
    </div>
  );
};

export default Card;

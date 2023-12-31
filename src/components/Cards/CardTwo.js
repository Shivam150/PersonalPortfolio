import React from 'react';
import '../../styles/Card.css';

const CardTwo = ({skillInfo}) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>{skillInfo.name}</h2>
        <p>{skillInfo.description}</p>
      </div>
    </div>
  );
};

export default CardTwo;

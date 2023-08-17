import React from 'react';
import Card from './Card'; // Import the Card component
import '../../styles/CardList.css';

const CardList = ({ cardList }) => {
  return (
    <div className="card-list">
      {cardList.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </div>
  );
};

export default CardList;

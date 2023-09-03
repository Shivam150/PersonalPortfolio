import React from 'react';
import CardTwo from './CardTwo'; // Import the Card component
import '../../styles/CardList.css';

const SkillList = ({ skillList }) => {
  return (
    <div className="card-list">
      {skillList.map((skillInfo) => (
        <CardTwo key={skillInfo.id} skillInfo={skillInfo} />
      ))}
    </div>
  );
};

export default SkillList;

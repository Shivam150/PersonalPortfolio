import React from 'react';
import CardThree from './CardThree'; // Import the Card component
import '../../styles/CardList.css';

const SkillList = ({ skillList }) => {
  return (
    <div className="card-list">
      {skillList.map((skillInfo) => (
        <CardThree key={skillInfo.id} skillInfo={skillInfo} />
      ))}
    </div>
  );
};

export default SkillList;

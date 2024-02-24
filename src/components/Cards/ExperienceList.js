import React from 'react';
import CardTwo from './CardTwo'; // Import the Card component
import '../../styles/Card2.css';

const ExperienceList = ({ experienceList}) => {
  return (
    <div className="card-list">
      {experienceList.map((experienceInfo) => (
        <CardTwo key={experienceInfo.id} experienceInfo={experienceInfo} />
      ))}
    </div>
  );
};

export default ExperienceList;

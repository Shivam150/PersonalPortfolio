import React from 'react';
import '../../styles/Card2.css';

const CardTwo = ({experienceInfo}) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>{experienceInfo.title}</h2>
        <h3>{experienceInfo.companyName}</h3>
        <h4>{experienceInfo.Date}</h4>
        <ul>  
          <li><strong>Location:</strong> {experienceInfo.companyLocation}</li>
          <li><strong>Description</strong></li>
          <p>{experienceInfo.description}</p>
        </ul>
      </div>
    </div>
  );
};

export default CardTwo;

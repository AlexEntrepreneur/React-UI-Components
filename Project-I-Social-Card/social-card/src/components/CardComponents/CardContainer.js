import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';

const CardContainer = () => {
  return (
    <div className="card-body-container">
      <CardContent
        cardContentTitle="Get Started with React"
        cardContentBodyText="Something Nice"
        cardContentLink="reactjs.org"
      />
    </div>
  );
}

export default CardContainer;

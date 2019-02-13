import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';

const CardContainer = () => {
  return (
    <div className="card-body-container">
      <CardContent
        cardContentTitle="Get Started with React"
        cardContentBodyText="React makes it painless to make interactive UI's. Design simple views for each state in your application."
        cardContentLink="reactjs.org"
      />
    </div>
  );
}

export default CardContainer;

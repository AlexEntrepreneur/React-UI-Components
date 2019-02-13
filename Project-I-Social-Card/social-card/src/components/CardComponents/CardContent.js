import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';

const CardContent = ({ cardContentTitle, cardContentBodyText, cardContentLink }) => {
  return (
    <div className="card-body-content">
      <CardBanner
        bannerImgSrc="https://ibin.co/3wnC6SgIOJud.png"
        alt="react js logo"
      />
      <div className="card-content">
        <p className="card-content-title">{ cardContentTitle }</p>
        <p className="card-content-body-text">{ cardContentBodyText }</p>
        <p className="card-content-link">{ cardContentLink }</p>
      </div>
    </div>
  );
}

export default CardContent;

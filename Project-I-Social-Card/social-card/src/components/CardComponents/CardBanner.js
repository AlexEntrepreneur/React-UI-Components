import React from 'react';
import './Card.css';

const CardBanner = ({ bannerImgSrc, bannerImgAlt }) => {
  return (
    <img src={ bannerImgSrc } alt={ bannerImgAlt }/>
  );
}

export default CardBanner;

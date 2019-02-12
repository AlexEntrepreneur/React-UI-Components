import React from 'react';
import './Header.css';

const ImageThumbnail = ({ avatarImgSrc, avatarAltText  }) => {
  return (
    <div className="card-avatar">
      <img className="card-avatar-img"
        src={ avatarImgSrc }
        alt={ avatarAltText }
      />
  </div>
  );
}

export default ImageThumbnail;

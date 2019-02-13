import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <header>
      <ImageThumbnail
        avatarImgSrc="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg"
        avatarAltText="Lambda Logo"
      />
      <HeaderContent
        bodyText="Let's learn React by building simpe interfaces with components. Don't try to overthink it, just keep it simple and fun. Once you feel comfortable using components you are well on your way to mastering React!"
      />
    </header>
  )
}

export default HeaderContainer;

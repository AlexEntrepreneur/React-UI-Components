import React from 'react';
import './Header.css';

const HeaderTitle = ({ name, handle, postDate}) => {
  return(
    <div className="header-headline-container">
      <h3>{ name }</h3>
      <p>@{ handle }</p>
      <span>∙</span>
      <p>{ postDate }</p>
    </div>
  );
}

export default HeaderTitle;

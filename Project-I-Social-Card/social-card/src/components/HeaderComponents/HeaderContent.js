import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';

const HeaderContent = ({ bodyText }) => {
  return (
    <div className="card-header-content">
      <HeaderTitle
        name="LambdaSchool"
        handle="LambdaSchool"
        postDate="26 Jan"
      />
      <p className="card-header-content-body-text">{ bodyText }</p>
    </div>
  );
}

export default HeaderContent;

/* eslint-disable react/prop-types */
import React from 'react';
import triangle from '../images/triangle.svg';

const TopUser = ({ user, index }) => (
  <div className={`topUser user${index + 1}`}>
    <div className="user-image">
      <img src={user.Pic[0].thumbnails.large.url} alt={user.Name} />
    </div>
    <p className="TopUser-name">{user.Name}</p>
    <p className="TopUser-xp">
      XP
      {' '}
      {user['Daily XP'][0]}
      <img className="icon-triangle" src={triangle} alt="" />
    </p>
  </div>
);

export default TopUser;

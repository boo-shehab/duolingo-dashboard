/* eslint-disable react/prop-types */
import React from 'react';
import triangle from '../images/triangle.svg';

const TopUser = ({ user, index }) => (
  <div className={`topUser user${index + 1}`}>
    <img src={user.Pic[0].thumbnails.large.url} alt={user.Name} />
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

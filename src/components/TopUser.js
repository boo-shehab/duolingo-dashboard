/* eslint-disable react/prop-types */
import React from 'react';

const TopUser = ({ user, index }) => (
  <div className={`topUser user${index + 1}`}>
    <img src={user.Pic[0].thumbnails.large.url} alt={user.Name} />
    <p>{user.Name}</p>
    <p>{user['Daily XP Delta']}</p>
  </div>
);

export default TopUser;

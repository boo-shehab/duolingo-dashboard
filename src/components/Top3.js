/* eslint-disable react/prop-types */
import React from 'react';
import TopUser from './TopUser';
import './componentsStyle/Top3.css';

const Top3 = ({ data }) => (
  <div className="topUsers">
    {data.map((user, index) => (
      <TopUser key={user.id} user={user} index={index} />
    ))}
  </div>
);

export default Top3;

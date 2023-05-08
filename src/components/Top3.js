/* eslint-disable react/prop-types */
import React from 'react';
import TopUser from './TopUser';
import './componentsStyle/Top3.css';

const Top3 = ({ data, on }) => (
  <div className="top3-container">
    <h2 className="RankListTitle">
      Top 3 users
      {on && on !== 'All' ? ` on ${on}` : ''}
    </h2>
    <div className="topUsers">
      {data.map((user, index) => (
        <TopUser key={user.id} user={user} index={index} />
      ))}
    </div>
  </div>
);

export default Top3;

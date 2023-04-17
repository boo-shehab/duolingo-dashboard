/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/RankListItem.css';
import './componentsStyle/RankListItemTop3.css';

const RankListItem = ({ user, rank }) => (
  <li className="RankListItemContainer">
    <div className="RankListItemLeft">
      <span className="RankListItemRank">{rank}</span>
      <img className="RankListItemIcon" src={user.Picture} alt={user.Name} />
      <span className="RankListItemName">{user.Name}</span>
    </div>
    <div>
      <span className="RankListItemXp">
        {user['Daily XP Delta']}
        {' '}
        XP
      </span>
    </div>
  </li>
);

export default RankListItem;

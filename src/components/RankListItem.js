/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/RankListItem.css';
import './componentsStyle/RankListItemTop3.css';

const RankListItem = ({ user, rank }) => (
  <tr className="RankListItemContainer">
    <td>{rank}</td>
    <td className="RankListItemPlayer">
      <img src={user.Picture} alt={user.Name} />
      <span>{user.Name}</span>
    </td>
    <td>
      {user['Daily XP Delta']}
      {' '}
      XP
    </td>
    <td>
      {user['Overall Streak']}
    </td>
    <td>
      {user['Last XP']}
      {' '}
      XP
    </td>
  </tr>
);

export default RankListItem;

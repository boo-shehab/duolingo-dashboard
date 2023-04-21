/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/RankListItem.css';
import './componentsStyle/RankListItemTop3.css';

const RankListUsers = ({ userData }) => (
  <>
    <table className="RankListContainer">
      <thead>
        <tr>
          <th>Rnak</th>
          <th>Player</th>
          <th>Daily XP</th>
          <th>Overall Streak</th>
          <th>Overall XP</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <tr key={user.id} className="RankListItemContainer">
            <td>{index + 1}</td>
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
        ))}
      </tbody>
    </table>
  </>
);

export default RankListUsers;

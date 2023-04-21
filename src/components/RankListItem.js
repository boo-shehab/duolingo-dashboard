/* eslint-disable react/prop-types */
import React from 'react';
import './componentsStyle/RankListItem.css';
import './componentsStyle/RankListItemTop3.css';

const RankListItem = ({ infoData, filterTaype }) => (
  <table className="RankListContainer">
    <thead>
      <tr>
        <th>Rnak</th>
        <th>{filterTaype}</th>
        <th>Daily XP</th>
        <th>Players</th>
      </tr>
    </thead>
    <tbody>
      {infoData.map((user, index) => (
        <tr key={user.id} className="RankListItemContainer">
          <td>{index + 1}</td>
          <td className="RankListItemPlayer">
            <span>{user[0]}</span>
          </td>
          <td>
            {user[1].xpCounter}
            {' '}
            XP
          </td>
          <td>
            {user[1].userCounter}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RankListItem;

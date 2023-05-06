/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './componentsStyle/RankList.css';
import './componentsStyle/RankListUsersTop3.css';
import Top3 from './Top3';

const RankListUsers = ({
  userData, filter, filterTaype, filteredData,
}) => {
  const [sliceTable, setSliceTable] = useState(10);
  const isActive = (filteredData === 'All' || filteredData === filterTaype);
  if (filter[0] !== 'All')userData = userData.filter((user) => user[filter[0]] === filter[1]);

  const handleSeeMore = () => {
    setSliceTable(sliceTable + 10);
  };
  return (
    <div className={`listBox ${isActive ? '' : 'not-active'}`}>
      {filteredData !== 'All' ? (
        <div>
          <Top3 data={userData.slice(0, 3)} on={filter[1]} />
        </div>
      )
        : (
          <h2 className="RankListTitle">Players</h2>
        )}

      <table className="RankListContainer">
        <thead>
          <tr>
            <th>Rnak</th>
            <th>Players</th>
            <th>Daily XP</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          {userData.slice(0, sliceTable).map((user, index) => (
            <tr key={user.id} className="RankListItemContainer">
              <td>{index + 1}</td>
              <td className="RankListItemPlayer">
                <a href={user['Duolingo Profile URL']}>
                  <img src={user.Pic[0].url} alt={user['Full Name']} />
                  <span>{user.Name.split(' ').slice(0, 2).join(' ')}</span>
                </a>
              </td>
              <td>
                {user['Daily XP'][0]}
                {' '}
                XP
              </td>
              <td>
                {user.Streak}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="RankListFooter">
              <button type="button" className="RankListButton" onClick={handleSeeMore}>
                See more
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RankListUsers;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './componentsStyle/RankList.css';

const RankListItem = ({
  infoData, filterTaype, filteredData, onRowClick,
}) => {
  const [sliceTable, setSliceTable] = useState(10);
  const isActive = (filteredData === 'All' || filteredData === filterTaype);
  const handleSeeMore = () => {
    setSliceTable(sliceTable + 10);
  };

  return (
    <div className={`listBox ${isActive ? '' : 'not-active'}`}>
      <h2 className="RankListTitle">{filterTaype}</h2>
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
          {infoData.slice(0, sliceTable).map((user, index) => (
            <tr key={user.id} className="RankListItemContainer" onClick={() => onRowClick([filterTaype, user[0]])}>
              <td>{index + 1}</td>
              <td>
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

export default RankListItem;

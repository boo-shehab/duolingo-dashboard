/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './componentsStyle/RankList.css';
import './componentsStyle/RankListUsersTop3.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Top3 from './Top3';
import LoadingPage from './LoadingPage';
import { fetchUsersData } from '../redux/userSlice';

const RankListUsers = ({ showTop3 }) => {
  const { filterKey, filterValue } = useParams();
  const { users, loading } = useSelector((state) => state.users);
  const [sliceTable, setSliceTable] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData({ filterKey, filterValue }));
  }, [dispatch, filterKey, filterValue]);

  const handleSeeMore = () => {
    setSliceTable(sliceTable + 10);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="listBox">
      {showTop3 ? (
        <div>
          <Top3 data={users.slice(0, 3)} on={filterValue} />
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
          {users.slice(0, sliceTable).map((user, index) => (
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

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './componentsStyle/RankList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRanksData } from '../redux/rankSlice';
import LoadingPage from './LoadingPage';

const RankListItem = ({ typeOfItem }) => {
  const { filter } = useParams();
  const infoData = useSelector((state) => state.ranks[typeOfItem || filter]);
  const { loading } = useSelector((state) => state.ranks);
  const [sliceTable, setSliceTable] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRanksData());
  }, [dispatch, filter]);

  const handleSeeMore = () => {
    setSliceTable(sliceTable + 10);
  };

  const onRowClick = (e) => {
    window.location.href = `${window.location.origin}/duolingo-dashboard/users/${e[0]}/${e[1]}`;
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="listBox">
      <h2 className="RankListTitle">{filter}</h2>
      <table className="RankListContainer">
        <thead>
          <tr>
            <th>Rnak</th>
            <th>{filter}</th>
            <th>Daily XP</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {infoData.slice(0, sliceTable).map((user, index) => (
            <tr key={user.id} className="RankListItemContainer" onClick={() => onRowClick([filter, user[0]])}>
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
        {(sliceTable < infoData.length)
          ? (
            <tfoot>
              <tr>
                <td colSpan={4} className="RankListFooter">
                  <button type="button" className="RankListButton" onClick={handleSeeMore}>
                    See more
                  </button>
                </td>
              </tr>
            </tfoot>
          )
          : ''}
      </table>
    </div>
  );
};

export default RankListItem;

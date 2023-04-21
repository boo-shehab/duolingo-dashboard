import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankListItem from './RankListItem';
import LoadingPage from './LoadingPage';
import { fetchUserData } from '../redux/userSlice';
import { fetchInfoData } from '../redux/infoSlice';
import RankListUsers from './RankListUsers';
import './componentsStyle/Leaderboard.css';

const Leaderboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { userData, loading } = useSelector((state) => state.user);
  const { infoData, infoLoading } = useSelector((state) => state.info);
  const [filteredData, setFilteredData] = useState('All');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchInfoData());
  }, [dispatch]);

  const handleFilterChange = (filter, index) => {
    setActiveIndex(index);
    setFilteredData(filter);
  };

  return (
    <>
      {(loading || infoLoading)
        ? <LoadingPage />
        : (
          <div>
            <div className="filter-buttons">
              <button type="button" className={activeIndex === 0 ? 'active' : ''} onClick={() => handleFilterChange('All', 0)}>All</button>
              <button type="button" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleFilterChange('Study Place', 1)}>Study Place</button>
              <button type="button" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleFilterChange('City', 2)}>City</button>
              <button type="button" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleFilterChange('Province', 3)}>Province</button>
              <button type="button" className={activeIndex === 4 ? 'active' : ''} onClick={() => handleFilterChange('Players', 4)}>Players</button>
            </div>
            {(filteredData === 'All' || filteredData === 'Province') ? (
              <RankListItem infoData={infoData[2]} filterTaype="Province" />
            ) : '' }
            {(filteredData === 'All' || filteredData === 'City') ? (
              <RankListItem infoData={infoData[1]} filterTaype="City" />
            ) : '' }
            {(filteredData === 'All' || filteredData === 'Study Place') ? (
              <RankListItem infoData={infoData[0]} filterTaype="Study Place" />
            ) : '' }
            {(filteredData === 'All' || filteredData === 'Players') ? (
              <RankListUsers userData={userData} />
            ) : '' }
          </div>
        )}
    </>
  );
};

export default Leaderboard;

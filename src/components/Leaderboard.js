import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankListItem from './RankListItem';
import LoadingPage from './LoadingPage';
import { fetchInfoData } from '../redux/infoSlice';
import RankListUsers from './RankListUsers';
import './componentsStyle/Leaderboard.css';

const Leaderboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    StudyPlace, Neighborhood, Province, Users, loading,
  } = useSelector((state) => state.info);
  const [filteredData, setFilteredData] = useState('All');
  const [filteredUserData, setFilteredUserData] = useState(['All', 'All']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoData());
  }, [dispatch]);

  const handleFilterChange = (filter, index) => {
    if (filter === 'User') setFilteredUserData(['All', 'All']);
    setActiveIndex(index);
    setFilteredData(filter);
  };

  const handleFilterUser = (filter) => {
    setFilteredUserData(filter);
    setFilteredData('User');
  };

  return (
    <div className="container">
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="filter-buttons">
            <button type="button" className={activeIndex === 0 ? 'active' : ''} onClick={() => handleFilterChange('All', 0)}>All</button>
            <button type="button" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleFilterChange('Study Place', 1)}>Study Place</button>
            <button type="button" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleFilterChange('Neighborhood', 2)}>City</button>
            <button type="button" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleFilterChange('Province', 3)}>Province</button>
            <button type="button" className={activeIndex === 4 ? 'active' : ''} onClick={() => handleFilterChange('User', 4)}>User</button>
          </div>
          {filteredData === 'All' || filteredData === 'Province' ? (
            <RankListItem infoData={Province} filterTaype="Province" onRowClick={handleFilterUser} />
          ) : null}
          {filteredData === 'All' || filteredData === 'Neighborhood' ? (
            <RankListItem infoData={Neighborhood} filterTaype="Neighborhood" onRowClick={handleFilterUser} />
          ) : null}
          {filteredData === 'All' || filteredData === 'Study Place' ? (
            <RankListItem infoData={StudyPlace} filterTaype="Study Place" onRowClick={handleFilterUser} />
          ) : null}
          {filteredData === 'All' || filteredData === 'User' ? (
            <RankListUsers
              userData={Users}
              filter={filteredUserData}
              filteredData={filteredData}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankListItem from './RankListItem';
import LoadingPage from './LoadingPage';
import { fetchRanksData } from '../redux/rankSlice';
import RankListUsers from './RankListUsers';
import './componentsStyle/Leaderboard.css';
import Top3 from './Top3';

const Leaderboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    StudyPlace, Neighborhood, Province, Users, loading,
  } = useSelector((state) => state.ranks);
  const [filteredData, setFilteredData] = useState('All');
  const [filteredUserData, setFilteredUserData] = useState(['All', 'All']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRanksData());
  }, [dispatch]);

  const handleFilterChange = (filter, index) => {
    if (filteredUserData[0] !== 'All') setFilteredUserData(['All', 'All']);

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
            <button type="button" className={activeIndex === 1 ? 'active' : ''} onClick={() => handleFilterChange('Study Place', 1)}>Study</button>
            <button type="button" className={activeIndex === 2 ? 'active' : ''} onClick={() => handleFilterChange('Neighborhood', 2)}>City</button>
            <button type="button" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleFilterChange('Province', 3)}>Province</button>
            <button type="button" className={activeIndex === 4 ? 'active' : ''} onClick={() => handleFilterChange('User', 4)}>User</button>
          </div>
          {filteredData === 'All'
            ? <Top3 data={Users.slice(0, 3)} />
            : ''}
          <RankListItem infoData={Province} filterTaype="Province" filteredData={filteredData} onRowClick={handleFilterUser} />
          <RankListItem infoData={Neighborhood} filterTaype="Neighborhood" filteredData={filteredData} onRowClick={handleFilterUser} />
          <RankListItem infoData={StudyPlace} filterTaype="Study Place" filteredData={filteredData} onRowClick={handleFilterUser} />
          <RankListUsers
            userData={Users}
            filterTaype="User"
            filter={filteredUserData}
            filteredData={filteredData}
          />
        </div>
      )}
    </div>
  );
};

export default Leaderboard;

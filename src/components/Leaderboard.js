import React, { useState, useEffect } from 'react';
import getUsers from '../airtable/Users';
import getInfo from '../airtable/Info';
import Top3 from './Top3';
import RankListItem from './RankListItem';
import './componentsStyle/Leaderboard.css';
import dummyData from '../airtable/dummyData';
import LoadingPage from './LoadingPage';
import SelectorFilter from './SelectorFilter';

const Leaderboard = () => {
  const [Users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFilter] = useState(['All', 'All']);
  const [searchQuery, setSearchQuery] = useState('');
  const [Filters, setFilters] = useState([]);

  // these filters should be fetched from anthor tables ["City, Country, University"]
  const cities = [...new Set(dummyData.map((user) => user.City))];
  const Countries = [...new Set(dummyData.map((user) => user.Country))];
  const Universities = [...new Set(dummyData.map((user) => user.University))];

  useEffect(() => {
    const FetchFilters = async () => {
      const recrds = await getInfo();
      setFilters(recrds);
    };
    FetchFilters();
  }, [Filters]);
  useEffect(() => {
    const fetchData = async () => {
      const records = await getUsers(filtered);
      setUsers(records);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchData();
  }, [filtered]);

  const filteredData = Users.filter((user) => user.Name.toLowerCase()
    .includes(searchQuery.toLowerCase()));

  const handleFilterChange = (e, filteredBy) => {
    setFilter([filteredBy, e.target.value]);
    // setUsers(Users.filter((user) => user[filteredBy].includes(e.target.value)));
  };
  return (
    <>
      {isLoading
        ? <LoadingPage />
        : (
          <div>
            <Top3 data={Users.slice(0, 3)} />
            <div>
              <SelectorFilter options={['All', ...cities]} title={filtered[0] === 'City' ? filtered[1] : 'City'} onChange={(e) => handleFilterChange(e, 'City')} />
              <SelectorFilter options={['All', ...Countries]} title={filtered[0] === 'Country' ? filtered[1] : 'All'} onChange={(e) => handleFilterChange(e, 'Country')} />
              <SelectorFilter options={['All', ...Universities]} title={filtered[0] === 'University' ? filtered[1] : 'All'} onChange={(e) => handleFilterChange(e, 'University')} />
              <SelectorFilter options={['All', ...Filters]} title={filtered[0] === 'Courses #' ? filtered[1] : 'Courses #'} onChange={(e) => handleFilterChange(e, 'Courses #')} />
              <input className="search-input" type="text" placeholder="Search by name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
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
                {filteredData.map((user) => (
                  <RankListItem key={user.id} user={user} rank={(Users.indexOf(user) + 1)} />
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  );
};

export default Leaderboard;

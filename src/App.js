/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import './App.css';
import RankListItem from './components/RankListItem';
import RankListUsers from './components/RankListUsers';

function App() {
  return (
    <Router>
      <ul className="filter-buttons">
        <li>
          <Link to="/duolingo-dashboard">All</Link>
        </li>
        <li>
          <Link to="/duolingo-dashboard/Study Place">Study</Link>
        </li>
        <li>
          <Link to="/duolingo-dashboard/Neighborhood">City</Link>
        </li>
        <li>
          <Link to="/duolingo-dashboard/Province">Province</Link>
        </li>
        <li>
          <Link to="/duolingo-dashboard/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="*" element={<Leaderboard />} />
        <Route path="/duolingo-dashboard" element={<Leaderboard />} />
        <Route path="/duolingo-dashboard/users" element={<RankListUsers showTop3 />} />
        <Route path="/duolingo-dashboard/users/:filterKey/:filterValue" element={<RankListUsers showTop3 />} />
        <Route path="/duolingo-dashboard/:filter" element={<RankListItem />} />
      </Routes>
    </Router>
  );
}

export default App;

import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
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
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/Study Place">Study</Link>
        </li>
        <li>
          <Link to="/Neighborhood">City</Link>
        </li>
        <li>
          <Link to="/Province">Province</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Leaderboard />} />
        <Route path="/users" element={<RankListUsers showTop3 />} />
        <Route path="/users/:filterKey/:filterValue" element={<RankListUsers showTop3 />} />
        <Route path="/:filter" element={<RankListItem />} />
      </Routes>
    </Router>
  );
}

export default App;

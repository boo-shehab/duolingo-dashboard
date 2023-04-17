import { Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;

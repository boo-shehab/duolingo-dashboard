import { Provider } from 'react-redux';
import Leaderboard from './components/Leaderboard';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Leaderboard />
    </Provider>
  );
}

export default App;

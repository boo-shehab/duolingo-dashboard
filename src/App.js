import { Provider } from 'react-redux';
import Store from './app/store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <Routes>

      </Routes>
      hello
    </Provider>
  );
}

export default App;

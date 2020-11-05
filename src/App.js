import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;

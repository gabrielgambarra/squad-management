import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

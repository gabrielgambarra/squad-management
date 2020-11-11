import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

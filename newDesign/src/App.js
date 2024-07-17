import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
// import openNav from "./assets/images/nav-button.svg";
// import closeNav from "./assets/images/close-nav-icon.svg";
// import useNavControl from './assets/scripts/nav-control';

function App() {

  // useNavControl(openNav, closeNav);

  return (
    <Router>
      <div className="App">
        <div id="filter"></div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

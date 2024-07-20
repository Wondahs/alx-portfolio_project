import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="filter"></div>
        <Header />
        <Routes>
          <Route path='/' element={<Home title="JobSync" />} />
          <Route path='/login' element={<Login title="JobSync - Login"/>} />
          <Route path='/signup' element={<Login title="JobSync - Signup"/>} />
          <Route path='/about' element={<AboutUs title="JobSync - About Us" />} />
          <Route path='/jobs' element={<JobList title="JobSync - Featured Jobs"/>} />
          <Route path='/jobs/:id' element={<JobDetail title="JobSync - Job Detail"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

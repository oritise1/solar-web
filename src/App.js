import './App.css';
import AboutImg from './components/AboutImg/AboutImg';
import Choose from './components/Choose/Choose';
import Expert from './components/Experience/Expert';
import Service from './components/ServiceI/Service';
import WeAre from './components/WeAre/WeAre';
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AboutImg />
      <Expert />
      <Choose />
      <WeAre />
      <Service />
    </div>
  );
}

export default App;

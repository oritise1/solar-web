import './App.css';
import AboutImg from './components/AboutImg/AboutImg';
import Expert from './components/Experience/Expert';
import NavBar from './components/navbar/NavBar';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AboutImg />
      <Expert />
    </div>
  );
}

export default App;

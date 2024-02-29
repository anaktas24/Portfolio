import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SolarSystem from './components/SolarSystem'
import AboutPlanet from './components/AboutPlanet'
import GreetingsInfoPlanet from './components/GreetingsInfoPlanet'
import HomePlanet from './components/HomePlanet'
import ProjectPlanet from './components/ProjectPlanet'
import ContactPlanet from './components/ContactPlanet'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/home" component={HomePlanet} />
        <Route path="/info" component={GreetingsInfoPlanet} />
        <Route path="/projects" component={ProjectPlanet} />
        <Route path="/about" component={AboutPlanet} />
        <Route path="/contact" component={ContactPlanet} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

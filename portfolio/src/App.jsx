import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SolarSystem from './components/SolarSystem'
import AboutPlanet from './components/AboutPlanet'
import Sun from './components/Sun'
import Earth from './components/Earth'
import ProjectPlanet from './components/ProjectPlanet'
import ContactPlanet from './components/ContactPlanet'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/home" component={Earth} />
        <Route path="/info" component={Sun} />
        <Route path="/projects" component={ProjectPlanet} />
        <Route path="/about" component={AboutPlanet} />
        <Route path="/contact" component={ContactPlanet} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

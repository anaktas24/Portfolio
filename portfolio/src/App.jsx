import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SolarSystem from './components/SolarSystem'
import Earth from './components/ProjectPlanet'

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

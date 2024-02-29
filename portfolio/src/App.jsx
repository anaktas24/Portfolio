import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import EarthPage from './components/EarthPage'; // Create this component for Earth

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/earth" component={EarthPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

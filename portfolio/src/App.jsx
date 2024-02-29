import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import Earth from './components/Earth'; // Create this component for Earth

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/earth" component={Earth} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

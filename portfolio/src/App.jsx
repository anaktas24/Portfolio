import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SolarSystem from './components/SolarSystem';
import Saturn from './components/Saturn';
import Sun from './components/Sun';
import Earth from './components/Earth';
import Venus from './components/Venus';
import Mars from './components/Mars';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/home" element={<Earth />} />
        <Route path="/info" element={<Sun />} />
        <Route path="/projects" element={<Venus />} />
        <Route path="/about" element={<Saturn />} />
        <Route path="/contact" element={<Mars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SolarSystem from './components/SolarSystem'
import Saturn from './components/Saturn'
import Sun from './components/Sun'
import Earth from './components/Earth'
import Venus from './components/Venus'
import Mars from './components/Mars'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="/home" component={Earth} />
        <Route path="/info" component={Sun} />
        <Route path="/projects" component={Venus} />
        <Route path="/about" component={Saturn} />
        <Route path="/contact" component={Mars} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import AgendaPage from './pages/Agenda';
import Speakers from './pages/Speakers';
import Pricing from './pages/Pricing';
import TravelHotel from './pages/TravelHotel';
import Sponsorship from './pages/Sponsorship';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/travel-hotel" element={<TravelHotel />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </Router>
  );
}

export default App;

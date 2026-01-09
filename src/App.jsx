import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Severnyashka from "./pages/Severnyashka";
import Trakiiska from "./pages/Trakiiska";
import Dobrojanska from "./pages/Dobrojanska";
import Pirinska from "./pages/Pirinska";
import Rodopska from "./pages/Rodopska";
import Shopska from "./pages/Shopska";
import MemoryGame from "./pages/MemoryGame";
import GuessArea from "./pages/GuessArea";
import Games from "./pages/Games";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/severnyashka" element={<Severnyashka />} />
        <Route path="/trakiiska" element={<Trakiiska />} />
        <Route path="/dobrojanska" element={<Dobrojanska />} />
        <Route path="/pirinska" element={<Pirinska />} />
        <Route path="/rodopska" element={<Rodopska />} />
        <Route path="/shopska" element={<Shopska />} />

        <Route path="/game" element={<Games />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/guess-area" element={<GuessArea />} /> 
      </Routes>
    </Router>
        
    
  );
}


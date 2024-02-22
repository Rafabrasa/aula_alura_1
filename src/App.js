import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './components/MainSection';
import LuffyPage from './components/personagens/Luffy/LuffyPage';
import ZoroPage from './components/personagens/Zoro/ZoroPage';
import SanjiPage from './components/personagens/Sanji/SanjiPage';
import NamiPage from './components/personagens/Nami/NamiPage';
import ChopperPage from './components/personagens/Chopper/ChopperPage';
import RobinPage from './components/personagens/Robin/RobinPage';
import BrookPage from './components/personagens/Brook/BrookPage';
import FrankyPage from './components/personagens/Franky/FrankyPage';
import UsoppPage from './components/personagens/Usopp/UsoppPage';
import JinbePage from './components/personagens/Jinbe/JinbePage';
import SunnyPage from './components/personagens/Sunny/SunnyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/luffy" element={<LuffyPage />} />
        <Route path="/zoro" element={<ZoroPage />} />
        <Route path="/sanji" element={<SanjiPage />} />
        <Route path="/nami" element={<NamiPage />} />
        <Route path="/chopper" element={<ChopperPage />} />
        <Route path="/robin" element={<RobinPage />} />
        <Route path="/brook" element={<BrookPage />} />
        <Route path="/franky" element={<FrankyPage />} />
        <Route path="/usopp" element={<UsoppPage />} />
        <Route path="/jinbe" element={<JinbePage />} />
        <Route path="/sunny" element={<SunnyPage />} />

      </Routes>
    </Router>
  );
}

export default App;

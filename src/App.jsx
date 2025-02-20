import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import HistoryPage from './pages/HistoryPage';
import Navbar from './components/Navbar';
import Scoreboard from './components/Scoreboard';
import SignupPage from './pages/SignUpPage';

function App() {
  let location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {location.pathname === "/" ? "" : <Navbar />}
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </div>
  );
}

export default App;

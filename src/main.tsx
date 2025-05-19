import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import { ChallengeOne } from './pages/challengeOne';
import { ChallengeTwo } from './pages/challengeTwo';
import App from './pages/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/challenge-1" element={<ChallengeOne />} />
        <Route path="/challenge-2" element={<ChallengeTwo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

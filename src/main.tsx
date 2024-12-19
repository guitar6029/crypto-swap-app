import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter from react-router-dom
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS globally
import './styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>  {/* Wrap App with Router */}
      <App />
    </Router>
  </StrictMode>,
);

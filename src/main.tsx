import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import './styles.scss';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import the Redux store

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the app with Provider */}
      <Router> {/* Wrap App with Router */}
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);

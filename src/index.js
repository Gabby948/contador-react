import React from 'react';
import { createRoot } from 'react-dom/client';
import './components/Button.css';
import './components/Counter.css';
import App from '../src/App';

const container = document.getElementById('root');
const root = createRoot(container);

if (process.env.NODE_ENV !== 'production') {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(<App />);
}
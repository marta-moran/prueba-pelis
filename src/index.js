import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { FilmsProvider } from './context/films.context';
import { SeriesProvider } from './context/series.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FilmsProvider>
      <SeriesProvider>
        <App />
      </SeriesProvider>
    </FilmsProvider>
  </Router>
);


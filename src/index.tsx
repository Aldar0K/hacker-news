import { fetchStoryById } from 'API';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router basename="/hacker-news">
    <App />
  </Router>
);

fetchStoryById(8863)
  .then((data) => {
    console.log(data);
  })
  .catch((err: Error) => {
    console.log(err.message);
  });

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProjectPage from './Project';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { NavBar } from './Nav';
import { GameListPage } from './GamesListPage';
import { ModListPage } from './ModListPage';

ReactDOM.render(
  <Router>
      <NavBar />
      <Routes>
          <Route path='' element={<App />} />
          <Route path='project' element={<ProjectPage />} />
          <Route path='games' element={<GameListPage />} />
          <Route path='mods' element={<ModListPage />} />
      </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// App.js
import React from 'react';
import { HashRouterRouter as Router, Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<LoginPage/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;

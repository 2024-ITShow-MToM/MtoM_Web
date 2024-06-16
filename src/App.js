import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Grade from './pages/Grade';
import Major from './pages/Major';
import Category from './pages/Category';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/major" element={<Major />} />
        <Route path="/category" element={<Category />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;

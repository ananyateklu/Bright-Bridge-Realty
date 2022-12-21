import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './component/home';

import Header from './component/header';
import Footer from './component/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes >
          <Route path="/" element={<Home />} />
         </Routes>

        <Footer />
      </Router>
     
    </div>
  );
}

export default App;

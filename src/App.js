import React from 'react';
import './App.sass';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Login from './components/user/Login';

function App() {
  return (
    <div className="App hero">
      <Login />
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="section">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;

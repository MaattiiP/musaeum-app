import React from 'react';
import './App.sass';

import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App hero">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div class="section">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;

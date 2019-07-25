import React from 'react';
import './App.sass';

import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App container">
      <Header />
      <div class="section">
        <Content />
      </div>

    </div>
  );
}

export default App;

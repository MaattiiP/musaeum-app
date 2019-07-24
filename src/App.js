import React from 'react';
import './App.sass';

import Header from './components/header/Header';
import Content from './components/content/Content.jsx';

function App() {
  return (
    <div className="App container">
      <Header />
      <Content />

    </div>
  );
}

export default App;

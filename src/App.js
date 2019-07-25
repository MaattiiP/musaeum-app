import React from 'react';
import './App.sass';

import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App container">
      <Header />
      <section className="section">
        <Content />
      </section>

    </div>
  );
}

export default App;

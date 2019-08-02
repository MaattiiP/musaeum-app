import React from "react";
import "./App.sass";

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App hero is-fullwidth is-fullheight">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="section">
          <Content />
        </div>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;

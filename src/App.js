import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, GithubStats } from "./container";
import { Navbar } from './components';
import "./App.scss";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <GithubStats />
      <Footer />
      <div class="app__flex" style={{ paddingTop: "1rem", paddingBottom: "1rem", flexDirection: "column", gap: "0.5rem" }}>
        <p class="footer-text">
          Designed & Built by
        </p>
        <p class="footer-text" style={{ color: "#313bac", fontWeight: "500" }}>
          Kopparapu Ravitheja
        </p>
      </div>
    </div>
  );
}

export default App;
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
      <div class="app__flex" style={{ height: "3rem" }}>
        Designed & Built by Ravitheja
      </div>
    </div>
  );
}

export default App;
import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, GithubStats } from "./container";
import { Navbar } from './components';
import "./App.scss";
import { BsDisplay } from 'react-icons/bs';

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
    </div>
  );
}

export default App;
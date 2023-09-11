import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Advantage, Company, Footer, Hero, Inbox, Review } from './components/sections/index.js';

// 🌴 App Component
const App = () => {
  return (
    <div className='page'>
      <Hero/>
      <Advantage/>
      <Company/>
      <Review/>
      <Inbox/>
      <Footer/>
    </div>
  );
};

// 🌴 Create Root
createRoot(document.getElementById('root')).render(<App />);

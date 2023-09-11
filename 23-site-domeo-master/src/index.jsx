import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import {
  About,
  Calculation,
  Conditions,
  Consist,
  Contact,
  Footer,
  Header,
  Interview,
  Need,
  NotSearch,
  Promo,
  Steps,
} from './components/Sections/index.js';

// 🌴 App Component
const App = () => <div className='page'>
  <Header />
  <Promo />
  <NotSearch />
  <Need />
  <Conditions />
  <Calculation />
  <Steps />
  <Consist />
  <Interview />
  <About />
  <Contact />
  <Footer />
</div>;

// 🌴 Create Root
createRoot(document.getElementById('root')).render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import Header from './components/Header/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Blog from './components/Blog/Blog.jsx';
import Review from './components/Review/Review.jsx';
import Footer from './components/Footer/Footer.jsx';

// 🌴 App Component
const App = () => {
  return (
    <div className='page'>
      <Header/>
      <Intro/>
      <About/>
      <Services/>
      <Blog/>
      <Review/>
      <Footer/>
    </div>
  );
};

// 🌴 Create Root
createRoot(document.getElementById('root')).render(<App />);

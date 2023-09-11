import logo from '../../assets/img/header/logo.svg';
import styles from './Header.module.scss';
import { useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(v => !v);
  };
  return (
    <motion.header className={styles.header}
                   initial='hidden'
                   whileInView='visible'
    >
      <motion.nav className='header__nav container'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1, ease: easeInOut } }}
      >
        <a href='#' className='header__logo'>
          <img src={logo} alt='Scheme' />
        </a>

        <ul className='header__menu'>
          {['Home', 'What we do', 'Project', 'Review', 'Blog'].map((item) =>
            <li className='header__menu-item' key={item}>
              <a href='#' className='header__menu-link'>{item}</a>
            </li>,
          )}
        </ul>
        <a href='#' className='btn btn--secondary header__btn'>Contact</a>

        <AnimatePresence>
          {open && <motion.div className='header__mobile header-mobile'
                               initial={{ y: -100, opacity: 0 }}
                               animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
                               exit={{ y: -100, opacity: 0, transition: { duration: 0.5, ease: easeInOut } }}
          >
            <ul className='header-mobile__menu'>
              {['Home', 'What we do', 'Project', 'Review', 'Blog'].map((item) =>
                <li className='header-mobile__menu-item' key={item}>
                  <a href='#' className='header-mobile__menu-link'>{item}</a>
                </li>,
              )}
            </ul>
            <a href='#' className='btn btn--secondary header-mobile__btn'>Contact</a>
          </motion.div>}
        </AnimatePresence>

        <button className={`header__burger hamburger hamburger--squeeze ${open ? 'is-active' : ''}`} type='button' onClick={handleMenu} aria-label='Open menu'>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>

      </motion.nav>
    </motion.header>
  );
};

export default Header;

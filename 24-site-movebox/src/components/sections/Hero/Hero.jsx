import styles from './Hero.module.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import logo from '../../../assets/img/hero/logo.svg';
import ico1 from '../../../assets/img/hero/ico-1.png';
import ico2 from '../../../assets/img/hero/ico-2.png';
import ico3 from '../../../assets/img/hero/ico-3.png';
import ico4 from '../../../assets/img/hero/ico-4.png';
import card1 from '../../../assets/img/hero/card-1.png';
import card2 from '../../../assets/img/hero/card-2.png';
import { useEffect, useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const Hero = () => {
  const isSmallDevice = useMediaQuery('(min-width : 768px)');
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(v => !v);
  };

  useEffect(() => {
    if (isSmallDevice) {
      if (!open) {
        setOpen(true);
        document.body.style.overflow = 'unset';
      }
    }else {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isSmallDevice, open]);

  return (
    <section className={styles.hero}>
      <div className='container hero__container'>
        <header className='header'>
          <nav className='header__nav'>
            <a href='#' className='header__logo'>
              <img src={logo} alt='MovieBox' />
            </a>
            <AnimatePresence>
              {open && <motion.div className='header__wrap'
                                   initial={{ y: -100, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: easeInOut } }}
                                   exit={{ y: -100, opacity: 0, transition: { duration: 0.3, ease: easeInOut } }}
              >
                <ul className='header__menu'>
                  <li className='header__menu-item'>
                    <a href='#' className='header__menu-link'>
                      Главная
                    </a>
                  </li>
                  <li className='header__menu-item'>
                    <a href='#' className='header__menu-link'>
                      Преимущества
                    </a>
                  </li>
                  <li className='header__menu-item'>
                    <a href='#' className='header__menu-link'>
                      Помощь
                    </a>
                  </li>
                  <li className='header__menu-item'>
                    <a href='#' className='header__menu-link'>
                      Прайс
                    </a>
                  </li>
                </ul>
                <a href='#' className='btn btn--third header__btn'>Попробовать</a>
              </motion.div>}
            </AnimatePresence>
            <button className={`header__burger hamburger hamburger--squeeze ${open ? 'is-active' : ''}`} type='button'
                    onClick={handleMenu} aria-label='Open menu'>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
            </button>
          </nav>
        </header>


        <div className='hero__content'>
          <div className='hero__wrap'>
            <h1 className='hero__title'>Управляйте своим почтовым ящиком прямо сейчас</h1>
            <p className='hero__subtitle'>"Ваши слова в каждом письме: надежная рассылка для эффективной коммуникации.
              Присоединяйтесь к связи без границ!"</p>
          </div>
          <div className='hero__row'>
            <div className='hero__column hero__column--left'>
              <ul className='hero__auth'>
                <li className='hero__auth-item'>
                  <button className='hero__auth-btn'>
                    <img className='hero__auth-ico' src={ico1} alt='Use my Google account' />
                    <span className='hero__auth-label'>Вход через Google</span>
                  </button>
                </li>
                <li className='hero__auth-item'>
                  <button className='hero__auth-btn'>
                    <img className='hero__auth-ico' src={ico2} alt='Use my Office365 account' />
                    <span className='hero__auth-label'>Вход через Office365</span>
                  </button>
                </li>
                <li className='hero__auth-item'>
                  <button className='hero__auth-btn'>
                    <img className='hero__auth-ico' src={ico3} alt='Use my iCloud account' />
                    <span className='hero__auth-label'>Вход через iCloud</span>
                  </button>
                </li>
                <li className='hero__auth-item'>
                  <button className='hero__auth-btn hero__auth-btn--message'>
                    <img className='hero__auth-ico' src={ico4} alt='Use any email address' />
                    <span className='hero__auth-label'>Вход через свою почту</span>
                  </button>
                </li>
              </ul>
              <p className='hero__auth-text'>
                Вы уже используете MoveBox? <a className='hero__auth-link' href='#'>Войдите в систему.</a>
              </p>
              <div className='hero__trial'>
                <p><b>Получите бесплатную 14-дневную пробную версию.</b></p>
                <p>Кредитная карта не требуется.</p>
              </div>
            </div>
            <div className='hero__column hero__column--right'>
              <img src={card2} alt='card' className='hero__card' />
              <img src={card1} alt='card' className='hero__card' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

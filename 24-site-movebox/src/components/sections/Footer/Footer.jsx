import styles from './Footer.module.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/img/footer/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container footer__container'>
        <div className='footer__top'>
          <div className='footer__about'>
            <a href='#' className='footer__logo'>
              <img className='footer__logo-img' src={logo} alt='MovieBox' />
            </a>
            <p className='footer__about-text'>Мы предоставляем лучшие услуги. Давайте управлять с помощью MoveBox.</p>
          </div>
          <div className='footer__row'>
            <div className='footer__column'>
              <h3 className='footer__title'>Услуги</h3>
              <ul className='footer__menu'>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>О нас</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Контакты</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Особенности</a>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>Ресурсы</h3>
              <ul className='footer__menu'>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Приложение</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Разработка</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Интеграция</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Прайс</a>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>SUPPORT</h3>
              <ul className='footer__menu'>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>Лицензия</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#' className='footer__menu-link'>FAQs</a>
                </li>
              </ul>
            </div>
            <div className='footer__column'>
              <h3 className='footer__title'>Контакты</h3>
              <ul className='footer__menu'>
                <li className='footer__menu-item'>
                  <a href='mailto:moviebox@gmail.com' className='footer__menu-link'>moviebox@gmail.com</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='tel:+12345678900' className='footer__menu-link'>+1234 567 8900</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <p className='footer__links'>
            <a className='footer__links-item' href='#'>Условия и требования</a>
            <a className='footer__links-item' href='#'>Политика конфиденциальности</a>
          </p>
          <p className='footer__copyright'>© Авторское право GDN все права защищены</p>
          <ul className='footer__social'>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Facebook'><FaFacebookF /></a>
            </li>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Twitter'><FaTwitter /></a>
            </li>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Linkedin'><FaLinkedinIn /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

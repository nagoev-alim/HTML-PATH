import styles from './Footer.module.scss';
import logo from '../../../assets/img/header/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className='footer__nav container'>
        <a href='#' className='footer__logo'>
          <img className='footer__logo-img' src={logo} alt='Domeo' />
        </a>
        <p className='footer__about'>Прямые работодатели по ремонту квартир в Москве</p>
        <div className='footer__cta'>
          <a className='footer__cta-number text' href='tel:+74956629523'>+7 (495) 662-95-23 </a>
          <button className='footer__cta-trigger'>Заказать звонок</button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

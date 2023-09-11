import styles from './Header.module.scss';
import logo from '../../../assets/img/header/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className='header__nav container'>
        <a href='#' className='header__logo'>
          <img className='header__logo-img' src={logo} alt='Domeo' />
        </a>
        <p className='header__about'>Прямые работодатели по ремонту квартир в Москве</p>
        <div className='header__cta'>
          <a className='header__cta-number' href='tel:+74956629523'>+7 (495) 662-95-23 </a>
          <button className='header__cta-trigger'>Заказать звонок</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

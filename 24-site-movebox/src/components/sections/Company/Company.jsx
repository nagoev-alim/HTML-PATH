import styles from './Company.module.scss';
import img1 from '../../../assets/img/company/1.png';
import img2 from '../../../assets/img/company/2.png';
import img3 from '../../../assets/img/company/3.png';
import img4 from '../../../assets/img/company/4.png';
import img5 from '../../../assets/img/company/5.png';
import img6 from '../../../assets/img/company/6.png';
import img7 from '../../../assets/img/company/7.png';
import img8 from '../../../assets/img/company/8.png';

const Company = () => {
  return (
    <section className={[styles.company, 'container'].join(' ')}>
      <h2 className='company__title title'>Компании, которым мы помогали развиваться</h2>
      <ul className='company__list'>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img1} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img2} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img3} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img4} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img5} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img6} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img7} alt='Company Name' />
          </a>
        </li>
        <li className='company__item'>
          <a href='#' className='company__link'>
            <img className='company__img' src={img8} alt='Company Name' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Company;

import styles from './About.module.scss';
import img1 from '../../../assets/img/certificates/1.png';
import img2 from '../../../assets/img/certificates/2.png';
import img3 from '../../../assets/img/certificates/3.png';

const About = () => {
  return (
    <section className={styles.about}>
      <div className='container about__container'>
        <div className='about__top'>
          <h2 className='title about__title'>Мы не обманем вас с зарплатой и другими договоренностями</h2>
          <p className='text about__text'>мы не хотим портить свою репутацию и "экологичность" компании</p>
        </div>
        <div className='about__content'>
          <p className='text'>Domeo работает с 2010 года. </p>
          <p className='text'>За это время мы создали бизнес-структуру, которая работает как дорогие швейцарские
            часы.</p>
          <p className='text'>Секрет нашего успеха в самых лучших условиях и высокой зарплате для мастеров, в
            честности и прозрачности с людьми.</p>
          <p className='text'>Мы ценим мастеров с большим опытом, а также создаём все условия для качественной
            работы.</p>
          <p className='text'><b>Присоединяйтесь к нам прямо сейчас!</b></p>
        </div>
        <div className='about__block'>
          <a href='#' className='btn btn--primary'>
            Присоединиться к Domeo
          </a>
          <p className='text about__block-text'>
            Мы ищем людей на постоянную работу. Нам нужны мастера для сотрудничества на долгие годы.
          </p>
        </div>
        <ul className='about__certificates'>
          <li className='about__certificates-item'>
            <img className='about__certificates-img' src={img1} alt='Certificate' />
          </li>
          <li className='about__certificates-item'>
            <img className='about__certificates-img' src={img2} alt='Certificate' />
          </li>
          <li className='about__certificates-item'>
            <img className='about__certificates-img' src={img3} alt='Certificate' />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

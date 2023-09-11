import styles from './Consist.module.scss';
import { Attention } from '../../Blocks/index.js';
import img1 from '../../../assets/img/consist/1.png'
import img2 from '../../../assets/img/consist/2.png'
import img3 from '../../../assets/img/consist/3.png'
import img4 from '../../../assets/img/consist/4.png'
const Consist = () => {
  return (
    <section className={styles.consist}>
      <div className='container consist__container'>
        <div className='consist__top'>
          <h2 className='title'>Ваша работа может состоять из:</h2>
          <p className='consist__text'>все зависит от вашей профессии и навыков </p>
        </div>

        <ul className='consist__list'>
          <li className='consist__item'>
            <img src={img1} alt='Внутренняя отделка квартир' className='consist__item-image' />
            <p className='consist__item-text text'>Внутренняя отделка квартир</p>
          </li>
          <li className='consist__item'>
            <img src={img2} alt='Чистовые и черновые работы' className='consist__item-image' />
            <p className='consist__item-text text'>Чистовые и черновые работы</p>
          </li>
          <li className='consist__item'>
            <img src={img3} alt='Малярные и плиточные работы' className='consist__item-image' />
            <p className='consist__item-text text'>Малярные и плиточные работы</p>
          </li>
          <li className='consist__item'>
            <img src={img4} alt='Электромонтажные и сантехнические работы' className='consist__item-image' />
            <p className='consist__item-text text'>Электромонтажные и сантехнические работы</p>
          </li>
        </ul>
        <Attention classname='consist__attention'>
          Чем больше работы вы делаете, тем больше мы платим вам, <b>без ограничений в зарплате</b>
        </Attention>
      </div>
    </section>
  );
};

export default Consist;

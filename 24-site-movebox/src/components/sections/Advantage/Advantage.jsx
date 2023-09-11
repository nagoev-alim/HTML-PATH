import styles from './Advantage.module.scss';
import img1 from '../../../assets/img/advantage/1.png';
import img2 from '../../../assets/img/advantage/2.png';
import img3 from '../../../assets/img/advantage/3.png';

const Advantage = () => {
  return (
    <section className={styles.advantage}>
      <div className='container advantage__container'>
        <ul className='advantage__list'>
          <li className='advantage__item'>
            <div className='advantage__item-row'>
              <div className='advantage__item-column'>
                <img src={img1} alt='Эффективность доставки' className='advantage__item-image' />
              </div>
              <div className='advantage__item-column'>
                <h3 className='advantage__item-title'>Эффективность доставки</h3>
                <p className='advantage__item-text'>Гарантированная доставка ваших писем вовремя и точно – ваше сообщение дойдет до адресата без задержек.</p>
                <a href='#' className='advantage__item-btn btn btn--primary'>Начать</a>
              </div>
            </div>
          </li>

          <li className='advantage__item advantage__item--reverse'>
            <div className='advantage__item-row'>
              <div className='advantage__item-column'>
                <img src={img2} alt='Персонализация' className='advantage__item-image' />
              </div>
              <div className='advantage__item-column'>
                <h3 className='advantage__item-title'>Персонализация</h3>
                <p className='advantage__item-text'>Создайте уникальный опыт для каждого получателя, настраивая контент под их интересы и потребности.</p>
                <a href='#' className='advantage__item-btn btn btn--secondary'>Начать</a>
              </div>
            </div>
          </li>

          <li className='advantage__item'>
            <div className='advantage__item-row'>
              <div className='advantage__item-column'>
                <img src={img3} alt='Высокая надежность' className='advantage__item-image' />
              </div>
              <div className='advantage__item-column'>
                <h3 className='advantage__item-title'>Высокая надежность</h3>
                <p className='advantage__item-text'>Наша инфраструктура обеспечивает стабильную работу, минимизируя вероятность сбоев и проблем.</p>
                <a href='#' className='advantage__item-btn btn btn--secondary'>Начать</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;

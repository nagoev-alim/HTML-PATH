import styles from './Inbox.module.scss';
import ico1 from '../../../assets/img/hero/ico-1.png';
import ico2 from '../../../assets/img/hero/ico-2.png';
import ico3 from '../../../assets/img/hero/ico-3.png';
import ico4 from '../../../assets/img/hero/ico-4.png';

const Inbox = () => {
  return (
    <section className={styles.inbox}>
      <div className='container inbox__container'>
        <h2 className='inbox__title'>Бесплатная 14-дневная очистка входящих сообщений</h2>
        <p className='inbox__text'>Мы предоставляем лучшие услуги. Если вы знаете, как пользоваться папками электронной почты, то вы то вы уже знаете, как использовать MoveBox!</p>
        <ul className='inbox__auth'>
          <li className='inbox__auth-item'>
            <button className='inbox__auth-btn'>
              <img className='inbox__auth-ico' src={ico1} alt='Use my Google account' />
              <span className='inbox__auth-label'>Вход через Google</span>
            </button>
          </li>
          <li className='inbox__auth-item'>
            <button className='inbox__auth-btn'>
              <img className='inbox__auth-ico' src={ico2} alt='Use my Office365 account' />
              <span className='inbox__auth-label'>Вход через Office365</span>
            </button>
          </li>
          <li className='inbox__auth-item'>
            <button className='inbox__auth-btn'>
              <img className='inbox__auth-ico' src={ico3} alt='Use my iCloud account' />
              <span className='inbox__auth-label'>Вход через iCloud</span>
            </button>
          </li>
          <li className='inbox__auth-item'>
            <button className='inbox__auth-btn inbox__auth-btn--message'>
              <img className='inbox__auth-ico' src={ico4} alt='Use any email address' />
              <span className='inbox__auth-label'>Вход через свою почту</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Inbox;

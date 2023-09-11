import styles from './Contact.module.scss';
import { PopupForm } from '../../Blocks/index.js';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className='container contact__container'>
        <div className='contact__top'>
          <h2 className='title'>
            Вы всегда можете прийти к нам <span>в офис для личного знакомства</span>
          </h2>
          <p className='text'>мы с радостью вас встретим и обсудим условия работы</p>
          <div className='contact__row'>
            <div className='contact__column contact__column--left'>
              <PopupForm text='Запишитесь на прием в офисе!' btnLabel='Посетить офис' />
            </div>
            <div className='contact__column contact__column--right'>
              <iframe className='contact__map' title='Map'
                      src='https://yandex.ru/map-widget/v1/?um=constructor%3Afeee4be4ba1663e6df85ec878a63e649a55eb03994cf2c843eb2bb5627483778&amp;source=constructor'
                      width='100%' height='400' frameBorder='0'></iframe>
              <div className='contact__address'>
                <ul className='contact__address-list'>
                  <li className='contact__address-item'>
                    <p className='contact__address-label'>Адрес офиса:</p>
                    <p className='contact__address-value'>г. Москва, ул. Лужнецкая наб. 2/4 стр. 17, офис 308</p>
                  </li>
                  <li className='contact__address-item'>
                    <p className='contact__address-label'>Контактный телефон:</p>
                    <p className='contact__address-value'>8 (495) 126-24-89</p>
                  </li>
                  <li className='contact__address-item'>
                    <p className='contact__address-label'>Электронная почта:</p>
                    <p className='contact__address-value'>info@domeo.ru</p>
                  </li>
                  <li className='contact__address-item'>
                    <p className='contact__address-label'>График работы:</p>
                    <p className='contact__address-value'>С 9.00 до 22.00 без выходных</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

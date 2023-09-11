import styles from './Need.module.scss';

const Need = () => {
  return (
    <section className={styles.need}>
      <div className='container'>
        <h2 className='title need__title'>В компанию требуются:</h2>
        <ul className='need__list'>
          <li className='need__list-item'>Специалист по отделке</li>
          <li className='need__list-item'>Специалист-универсал</li>
          <li className='need__list-item'>Сантехник</li>
          <li className='need__list-item'>Электрик</li>
          <li className='need__list-item'>Плиточник</li>
          <li className='need__list-item'>Плотник</li>
          <li className='need__list-item'>Специалист по стяжке</li>
          <li className='need__list-item'>Мастер по ГКЛ</li>
          <li className='need__list-item'>Маляр</li>
          <li className='need__list-item'>Штукатур</li>
          <li className='need__list-item'>И другие</li>
        </ul>
        <div className='need__message message'>
          <svg xmlns='http://www.w3.org/2000/svg' width='62' height='62' viewBox='0 0 62 62' fill='none'>
            <path
              d='M37.5798 3.875L34.0787 39.1753H27.9213L24.4203 3.875H37.5798ZM39.7188 1.9375H22.2812L26.1659 41.1128H35.8331L39.7188 1.9375Z'
              fill='#0260E8' />
            <path
              d='M31.0001 47.1849C34.0245 47.1849 36.4851 49.6388 36.4851 52.6545C36.4851 55.6702 34.0245 58.125 31.0001 58.125C27.9747 58.125 25.5131 55.6712 25.5131 52.6555C25.5131 49.6397 27.9747 47.1849 31.0001 47.1849ZM31.0001 45.2474C26.8993 45.2474 23.5756 48.5644 23.5756 52.6545C23.5756 56.7446 26.8993 60.0625 31.0001 60.0625C35.0998 60.0625 38.4226 56.7455 38.4226 52.6555C38.4226 48.5654 35.0998 45.2474 31.0001 45.2474Z'
              fill='#0260E8' />
          </svg>
          <p className='need__message-text message__text'>
            Для работы в нашей компании вам необходимо иметь <b>собственный инструмент и опыт работы от 3х лет</b>
          </p>
        </div>
        <div className='need__proposal'>
          <h2 className='title need__proposal-title'>Заполните форму прямо сейчас!</h2>
          <p className='need__proposal-text'>И получите постоянную работу с достойной зарплатой</p>
          <form action='#' className='need__proposal-form need__form form-1'>
            <label className='need__form-label'>
              <span className='need__form-label label'>Введите Ваше имя</span>
              <input className='need__form-input input' type='text' name='name' placeholder='Например, Алексей' required={true}/>
            </label>
            <label className='need__form-label'>
              <span className='need__form-label label'>Введите Ваш телефон</span>
              <input className='need__form-input input' type='text' name='name' placeholder='+7 (___)___-__-__' required={true}/>
            </label>
            <div className='need__form-footer form-1__footer'>
              <button className='btn btn--primary need__btn' type='submit'>Получить постоянную работу</button>
              <p className='form-1__footer-text need__form-footer-text'>
                Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь
                c <a href='#'>политикой конфиденциальности</a>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Need;

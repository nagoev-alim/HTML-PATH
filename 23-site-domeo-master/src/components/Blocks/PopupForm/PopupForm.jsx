import styles from './PopupForm.module.scss';

const PopupForm = ({ title = 'Заполните форму!', text, btnLabel }) => {
  return (
    <div className={styles.popupForm}>
      <div className='popup-form__top'>
        <h2 className='title'>{title}</h2>
        <p className='text'>{text}</p>
      </div>
      <form className='popup-form__form'>
        <label>
          <span className='label'>Введите Ваше имя</span>
          <input className='input' type='email' name='email' placeholder='Например, Алексей' required={true} />
        </label>
        <label>
          <span className='label'>Введите Ваш телефон</span>
          <input className='input' type='tel' name='tel' placeholder='+7 (___)___-__-__' required={true} />
        </label>
        <div className='popup-form__footer'>
          <button className='btn btn--primary' type='submit'>{btnLabel}</button>
          <p>Нажимая на кнопку, Вы даёте согласие на обработку персональных данных и соглашаетесь
            c <a href='#'>политикой конфиденциальности</a></p>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;

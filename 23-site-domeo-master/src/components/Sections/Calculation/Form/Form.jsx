import styles from './Form.module.scss';
import { useState } from 'react';

const questions = [
  {
    title: 'Какая у вас специализация?',
    text: 'можно выбрать несколько',
    answers: [
      'Специалист по отделке',
      'Специалист по стяжке',
      'Специалист-универсал',
      'Специалист-универсал',
      'Мастер по ГКЛ',
      'Сантехник',
      'Маляр',
      'Электрик',
      'Каменщик',
      'Плиточник',
      'Штукатур',
      'Плотник',
      'Другое',
    ],
  },
  {
    title: 'Сколько лет опыта?',
    text: 'в выбранной ранее специализации',
    answers: [
      'До 1 года',
      'От 2 до 3 лет',
      'От 3 лет и более',
    ],
  },
  {
    title: 'Есть ли у вас собственный инструмент?',
    text: 'которым вы сможете выполнять качественный ремонт',
    answers: [
      'Да',
      'Нет',
      'Нет, но скоро обзаведусь',
    ],
  },
];
const Form = () => {
  const [step, setStep] = useState(0);

  const handleStepNext = () => {
    setStep(v => v + 1 <= 3 ? v + 1 : 3);
  };
  const handleStepPrev = () => {
    setStep(v => v - 1 <= 0 ? 0 : v - 1);
  };
  return (
    <div className={styles.calculationForm}>
      <div className='calculation-form__top'>
        {step !== 3 && <>
          <h2 className='title calculation-form__title'>{questions[step].title}</h2>
          <p className='text calculation-form__text'>{questions[step].text}</p>
          <ul className={`calculation-form__list calculation-form__list--${step}`}>
            {questions[step].answers.map((el, idx) => (
              <li className='calculation-form__list-item' key={idx}>
                <label className='calculation-form__list-label'>
                  {step === 0 && <input type='checkbox' name={el} value={el} className='visually-hidden' />}
                  {step !== 0 && <input type='radio' name='value' value={el} className='visually-hidden' />}
                  <span className='checkbox'></span>
                  <span className='text calculation-form__list-text'>{el}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className='calculation-form__btns'>
            {step !== 0 && <button className='btn btn--secondary' onClick={handleStepPrev}>Назад</button>}
            <button className='btn btn--primary' onClick={handleStepNext}>Далее</button>
          </div>
        </>}
        {step === 3 && <>
          <h2 className='title calculation-form__title'>Остался последний шаг</h2>
          <p className='text calculation-form__text'>заполните форму для расчет вашей будущей зарплаты</p>
          <form action='#' className='form-1'>
            <label>
              <span className='label'>Введите Ваше имя</span>
              <input className='input' type='text' name='name' placeholder='Например, Алексей' required={true} />
            </label>
            <label>
              <span className='label'>Введите Ваш телефон</span>
              <input className='input' type='text' name='name' placeholder='+7 (___)___-__-__' required={true} />
            </label>
            <div className='form-1__footer'>
              <button className='btn btn--primary' type='submit'>Получить постоянную работу</button>
              <p className='form-1__footer-text'>
                Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь
                c <a href='#'>политикой конфиденциальности</a>
              </p>
            </div>
          </form>
        </>}
      </div>
    </div>
  );
};

export default Form;

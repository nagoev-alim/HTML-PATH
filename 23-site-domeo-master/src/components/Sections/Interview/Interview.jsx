import styles from './Interview.module.scss';
import { PopupForm } from '../../Blocks/index.js';

const Interview = () => {
  return (
    <section className={styles.interview}>
      <div className='container interview__container'>
        <div className='interview__top'>
          <h2 className='title'><span>Запишитесь прямо сейчас</span> на онлайн собеседование</h2>
          <p className='text'>мы перезвоним вам с уточняющими вопросами в течении 30 минут после заявки</p>
        </div>
        <div className='interview__row'>
          <div className='interview__column interview__column--left'>
            <p className='text interview__question'>
              Во время собеседования мы у вас спросим:
            </p>
            <ul className='interview__list'>
              <li className='interview__list-item'>
                <p className='interview__list-text text'>Где вы живете территориально, и как планируете работать в
                  Москве? </p>
              </li>
              <li className='interview__list-item'>
                <p className='interview__list-text text'>Какую работу в ремонте квартир вы можете выполнять
                  качественно?</p>
              </li>
              <li className='interview__list-item'>
                <p className='interview__list-text text'>Есть ли у вас инструмент и опыт работы в ремонтах квартир?</p>
              </li>
              <li className='interview__list-item'>
                <p className='interview__list-text text'>Какую зарплату вы хотите получать?</p>
              </li>
              <li className='interview__list-item'>
                <p className='interview__list-text text'>И еще пару вопросов</p>
              </li>
            </ul>
          </div>
          <div className='interview__column interview__column--right'>
            <PopupForm title='Заполните форму!' text='Запишитесь на онлайн собеседование!'
                       btnLabel='Записаться на собеседование' />
          </div>
        </div>
        <div className='interview__attention text'>
          <b>Если вас устроят все условия работы, вы можете выйти на объект уже на следующий день</b>
        </div>
      </div>
    </section>
  );
};

export default Interview;

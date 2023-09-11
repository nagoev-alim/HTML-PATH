import styles from './Calculation.module.scss';
import Form from './Form/Form.jsx';

const Calculation = () => {
  return (
    <section className={styles.calculation}>
      <div className='container'>
        <h2 className='title calculation__title'>
          Рассчитайте вашу будущую <span>зарплату в Domeo</span>
        </h2>
        <p className='text calculation__text'>ответьте на 3 ключевых вопроса, по которым мы определим вашу точную зарплату</p>
        <Form/>
      </div>
    </section>
  );
};

export default Calculation;

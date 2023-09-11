import styles from './NotSearch.module.scss';

const NotSearch = () => {
  return (
    <section className={styles.notsearch}>
      <div className='container'>
        <h2 className='title notsearch__title'>
          <span>Вам больше не придется искать работу</span> и проверять работодателя на честность
        </h2>
        <p className='notsearch__text'>если вы начнете работать с нами</p>
      </div>
    </section>
  );
};

export default NotSearch;

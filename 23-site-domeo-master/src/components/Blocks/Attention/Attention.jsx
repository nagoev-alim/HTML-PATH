import styles from './Attention.module.scss';

const Attention = ({ children, classname }) => {
  return (
    <div className={[styles.attention, classname].join(' ')}>
      <div className='attention__content text'>
        {children}
      </div>
    </div>
  );
};

export default Attention;

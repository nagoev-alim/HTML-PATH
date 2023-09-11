import img from '../../assets/img/about/image.png';
import styles from './About.module.scss';
import { easeIn, motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section className={styles.about}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3, once: true }}
    >
      <div className='container about__container'>
        <motion.div className='about__column about__left'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: easeIn } }}
        >
          <img src={img} alt='Determind to give you the best designs.' className='about__image' />
        </motion.div>
        <motion.div className='about__column about__right'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: easeIn } }}
        >
          <h2 className='title about__title'>About Us</h2>
          <p className='subtitle about__sub'>Determind to give you the best designs.</p>
          <p className='about__text'>We are a team of creative people who are committed to giving the world a little
            touch of beauty with our designs. We love what we do and we do it with passions.</p>
          <p className='about__text'>We believe in using business to drive positive changes in the world & never setting
            for what worked in the past.</p>
          <a href='#' className='btn btn--primary'>Learn More</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

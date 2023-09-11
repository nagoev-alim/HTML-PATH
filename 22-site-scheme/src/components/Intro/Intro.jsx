import img1 from '../../assets/img/intro/img1.png';
import img2 from '../../assets/img/intro/img2.png';
import styles from './Intro.module.scss';
import { easeInOut, motion } from 'framer-motion';

const Intro = () => {
  return (
    <motion.section className={['intro', styles.intro].join(' ')}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
    >
      <div className='container intro__container'>
        <motion.div className='intro__column'
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
        >
          <h1 className='title'>
            Design, Development & Marketing.
          </h1>
          <h2 className='subtitle intro__title'>
            Sharing some unique creations
          </h2>
          <p className='intro__text'>
            We are helping people to grow their business. We are providing the best designs and development service for
            your next dream project.
          </p>
          <div className='intro__btns'>
            <a href='#' className='btn btn--primary'>Let’s Talk</a>
            <a href='#' className='btn btn--third'>Learn More</a>
          </div>
        </motion.div>
        <motion.div className='intro__column intro__right'
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
        >
          <img src={img1} alt='Design, Development & Marketing' className='intro__img-1' />
          <img src={img2} alt='Design, Development & Marketing' className='intro__img-2' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;

import img1 from '../../assets/img/blog/img1.jpg';
import img2 from '../../assets/img/blog/img2.jpg';
import img3 from '../../assets/img/blog/img3.jpg';
import styles from './Blog.module.scss';
import { easeIn, easeInOut, motion } from 'framer-motion';

const anim = {
  hidden: { y: 100, opacity: 0 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: easeIn,
    },
  }),
};

const textAnim = {
  hidden: { y: 100, opacity: 0 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: easeInOut,
    },
  }),
};

const Blog = () => {
  return (
    <motion.section className={styles.blog}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3, once: true }}
    >
      <div className='container blog__container'>
        <div className='blog__top'>
          <motion.h2 custom={1} variants={textAnim} className='title blog__title'>Our Project</motion.h2>
          <motion.p custom={2} variants={textAnim} className='subtitle blog__subtitle'>Our latest project</motion.p>
        </div>
        <motion.ul className='blog__list'
                   initial='hidden'
                   whileInView='visible'
                   viewport={{ amount: 0.5, once: true }}
        >
          {[
            { img: img1, title: 'Brand logo for a coffee company', category: 'Brand Logo' },
            { img: img2, title: 'Web deisgn development for a education platform', category: 'Web Development' },
            { img: img3, title: 'Brand logo for a coffee company', category: 'Brand Logo' },
          ].map((item, index) => (
            <motion.li custom={index + 1} variants={anim} className='blog__list-item' key={index}>
              <img className='blog__list-img' src={item.img} alt={item.title} />
              <p className='blog__list-category'>{item.category}</p>
              <h3 className='blog__list-title'>{item.title}</h3>
            </motion.li>
          ))}
        </motion.ul>
        <div className='blog__btn'>
          <a href='#' className='btn btn--primary'>See More</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;

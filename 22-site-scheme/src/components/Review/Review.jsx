import image from '../../assets/img/review/Image.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { easeIn, motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Review.module.scss';
import { useCallback, useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Review = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <motion.section className={styles.review}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.3, once: true }}
    >
      <h2 className='visually-hidden'>Our Reviews</h2>
      <div className='container review__container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          ref={sliderRef}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <motion.div className='review__row'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1 : 0.5, transition: { duration: 0.5 },
                            }}
                >
                  <img src={image} alt='Mitchell Marsh' />
                  <div className='review__content'>
                    <blockquote>
                      <q className='review__quote'>
                        Working with Besnik design agency is a breath of fresh air, they delivered my project on time
                        and
                        exceeded my expectations. I’m especially fond of their beautiful and insightful illustrations
                      </q>
                      <p className='review__author'>Mitchell Marsh</p>
                      <cite className='review__position'>CEO of Bexon</cite>
                    </blockquote>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}

          <div className='review__navigation'>
            <button className='review__navigation-btn prev-arrow' onClick={handlePrev} aria-label='Previous'>
              <BsArrowLeft />
            </button>
            <button className='review__navigation-btn next-arrow' onClick={handleNext} aria-label='Next'>
              <BsArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Review;

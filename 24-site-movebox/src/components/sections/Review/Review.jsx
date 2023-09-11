import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image from '../../../assets/img/review/avatar.png';
import company from '../../../assets/img/review/company.png';
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
    <section className={styles.review}>
      <h2 className='visually-hidden'>Reviews</h2>
      <div className='container review__container'>
        <Swiper
          className='review__slider'
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          ref={sliderRef}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
        >
          <SwiperSlide>
            <div className='review__slide'>
              <img className='review__slide-avatar' src={image} alt='' />
              <div className='review__slide-content'>
                <img src={company} alt='Сергей Иванов' className='review__slide-company' />
                <h3 className='review__slide-title'>Почему мы раньше не сотрудничали?</h3>
                <p className='review__slide-text'>
                  "Сотрудничество с компанией по рассылке писем стало настоящим прорывом для нашего бизнеса. Эффективность доставки и возможность персонализации контента позволили нам укрепить связь с нашей аудиторией. Благодаря подробной аналитике, мы теперь точно знаем, что именно интересует наших клиентов. Это инструмент, который сэкономил нам массу времени и приблизил нас к нашей целевой аудитории."
                </p>
                <p className='review__slide-author'>Сергей Иванов</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='review__slide'>
              <img className='review__slide-avatar' src={image} alt='' />
              <div className='review__slide-content'>
                <img src={company} alt='' className='review__slide-company' />
                <h3 className='review__slide-title'>Почему мы раньше не сотрудничали?</h3>
                <p className='review__slide-text'>"Сотрудничество с компанией по рассылке писем стало настоящим прорывом для нашего бизнеса. Эффективность доставки и возможность персонализации контента позволили нам укрепить связь с нашей аудиторией. Благодаря подробной аналитике, мы теперь точно знаем, что именно интересует наших клиентов. Это инструмент, который сэкономил нам массу времени и приблизил нас к нашей целевой аудитории."</p>
                <p className='review__slide-author'>Сергей Иванов</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='review__slide'>
              <img className='review__slide-avatar' src={image} alt='' />
              <div className='review__slide-content'>
                <img src={company} alt='' className='review__slide-company' />
                <h3 className='review__slide-title'>Почему мы раньше не сотрудничали?</h3>
                <p className='review__slide-text'>"Сотрудничество с компанией по рассылке писем стало настоящим прорывом для нашего бизнеса. Эффективность доставки и возможность персонализации контента позволили нам укрепить связь с нашей аудиторией. Благодаря подробной аналитике, мы теперь точно знаем, что именно интересует наших клиентов. Это инструмент, который сэкономил нам массу времени и приблизил нас к нашей целевой аудитории."</p>
                <p className='review__slide-author'>Сергей Иванов</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='review__slide'>
              <img className='review__slide-avatar' src={image} alt='' />
              <div className='review__slide-content'>
                <img src={company} alt='' className='review__slide-company' />
                <h3 className='review__slide-title'>Почему мы раньше не сотрудничали?</h3>
                <p className='review__slide-text'>"Сотрудничество с компанией по рассылке писем стало настоящим прорывом для нашего бизнеса. Эффективность доставки и возможность персонализации контента позволили нам укрепить связь с нашей аудиторией. Благодаря подробной аналитике, мы теперь точно знаем, что именно интересует наших клиентов. Это инструмент, который сэкономил нам массу времени и приблизил нас к нашей целевой аудитории."</p>
                <p className='review__slide-author'>Сергей Иванов</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='review__navigation'>
          <button className='review__navigation-btn prev-arrow' onClick={handlePrev} aria-label='Previous'>
            <BsArrowLeft size={30} />
          </button>
          <button className='review__navigation-btn next-arrow' onClick={handleNext} aria-label='Next'>
            <BsArrowRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;

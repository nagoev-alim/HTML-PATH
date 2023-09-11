import logo from '../../assets/img/footer/logo.svg';
import styles from './Footer.module.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { easeIn, motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer className={styles.footer}
                   initial='hidden'
                   whileInView='visible'
                   viewport={{ amount: 0.3, once: true }}
    >

      <motion.div className={[styles.contact, 'container'].join(' ')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5, ease: easeIn } }}
      >
        <div className='contact__top'>
          <h2 className='title contact__title'>Contact Us</h2>
          <p className='subtitle contact__subtitle'>Let’s work together</p>
        </div>
        <div className='contact__btns'>
          <a href='#' className='btn btn--primary contact__btn-primary'>Let’s Talk</a>
          <a href='#' className='btn btn--third contact__btn-third'>Learn More</a>
        </div>
      </motion.div>

      <div className='container'>
        <div className='footer__top'>
          <a href='#' className='footer__logo'>
            <img src={logo} alt='Entepoti' />
          </a>
          <ul className='footer__menu'>
            {['Home', 'What we do', 'Project', 'Review', 'Blog'].map((item) =>
              <li className='footer__menu-item' key={item}>
                <a href='#' className='footer__menu-link'>{item}</a>
              </li>,
            )}
          </ul>
          <ul className='footer__social'>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Facebook'>
                <FaFacebookF />
              </a>
            </li>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Twitter'>
                <FaTwitter />
              </a>
            </li>
            <li className='footer__social-item'>
              <a href='#' className='footer__social-link' aria-label='Linkedin'>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__bottom'>
          Copyright © {new Date().getFullYear()} Webdesign.gdn All Rights Reserved
        </div>
      </div>

    </motion.footer>
  );
};

export default Footer;

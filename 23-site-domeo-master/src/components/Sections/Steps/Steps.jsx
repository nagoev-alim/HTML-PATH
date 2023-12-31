import styles from './Steps.module.scss';

const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className='container'>
        <h2 className='title steps__title'>Устройтесь на работу вашей мечты за <span>4 шага</span></h2>
        <p className='text steps__text'>самое главное начать, ведь места ограничены</p>
        <ul className='steps__list'>
          <li className='steps__list-item' data-number='1'>
            <p className='steps__list-text'>Отправьте любую заявку на сайте</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
              <path d='M10 7.5H25V10H10V7.5Z' fill='#0260E8' />
              <path d='M10 12.5H25V15H10V12.5Z' fill='#0260E8' />
              <path d='M10 17.5H17.5V20H10V17.5Z' fill='#0260E8' />
              <path d='M10 30H15V32.5H10V30Z' fill='#0260E8' />
              <path
                d='M37.1338 24.116L33.3838 20.366C33.1493 20.1316 32.8315 20 32.5 20C32.1685 20 31.8507 20.1316 31.6162 20.366L20 31.9822V37.4997H25.5175L37.1338 25.8835C37.3681 25.6491 37.4997 25.3312 37.4997 24.9997C37.4997 24.6683 37.3681 24.3504 37.1338 24.116ZM24.4825 34.9997H22.5V33.0172L28.75 26.7672L30.7325 28.7497L24.4825 34.9997ZM32.5 26.9822L30.5175 24.9997L32.5 23.0172L34.4825 24.9997L32.5 26.9822Z'
                fill='#0260E8' />
              <path
                d='M15 37.5H7.5C6.83716 37.4993 6.20166 37.2357 5.73296 36.767C5.26427 36.2983 5.00066 35.6628 5 35V5C5.00066 4.33716 5.26427 3.70166 5.73296 3.23296C6.20166 2.76427 6.83716 2.50066 7.5 2.5H27.5C28.1628 2.50066 28.7983 2.76427 29.267 3.23296C29.7357 3.70166 29.9993 4.33716 30 5V17.5H27.5V5H7.5V35H15V37.5Z'
                fill='#0260E8' />
            </svg>
          </li>
          <li className='steps__list-item' data-number='2'>
            <p className='steps__list-text'>Собеседование по телефону</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
              <path d='M20 17.5H22.5V20H20V17.5Z' fill='#0260E8' />
              <path d='M25 17.5H27.5V20H25V17.5Z' fill='#0260E8' />
              <path d='M30 17.5H32.5V20H30V17.5Z' fill='#0260E8' />
              <path d='M20 22.5H22.5V25H20V22.5Z' fill='#0260E8' />
              <path d='M25 22.5H27.5V25H25V22.5Z' fill='#0260E8' />
              <path d='M30 22.5H32.5V25H30V22.5Z' fill='#0260E8' />
              <path d='M20 27.5H22.5V30H20V27.5Z' fill='#0260E8' />
              <path d='M25 27.5H27.5V30H25V27.5Z' fill='#0260E8' />
              <path d='M30 27.5H32.5V30H30V27.5Z' fill='#0260E8' />
              <path d='M20 12.5H32.5V15H20V12.5Z' fill='#0260E8' />
              <path
                d='M35 7.5H17.5V6.25C17.4993 5.58716 17.2357 4.95166 16.767 4.48296C16.2983 4.01427 15.6628 3.75066 15 3.75H10C9.33716 3.75066 8.70166 4.01427 8.23296 4.48296C7.76427 4.95166 7.50066 5.58716 7.5 6.25V7.5H5C4.33716 7.50066 3.70166 7.76427 3.23296 8.23296C2.76427 8.70166 2.50066 9.33716 2.5 10V32.5C2.50066 33.1628 2.76427 33.7983 3.23296 34.267C3.70166 34.7357 4.33716 34.9993 5 35H35C35.6628 34.9993 36.2983 34.7357 36.767 34.267C37.2357 33.7983 37.4993 33.1628 37.5 32.5V10C37.4993 9.33716 37.2357 8.70166 36.767 8.23296C36.2983 7.76427 35.6628 7.50066 35 7.5ZM10 6.25H15V27.5H10V6.25ZM35 32.5H5V10H7.5V27.5C7.50066 28.1628 7.76427 28.7983 8.23296 29.267C8.70166 29.7357 9.33716 29.9993 10 30H15C15.6628 29.9993 16.2983 29.7357 16.767 29.267C17.2357 28.7983 17.4993 28.1628 17.5 27.5V10H35V32.5Z'
                fill='#0260E8' />
            </svg>
          </li>
          <li className='steps__list-item' data-number='3'>
            <p className='steps__list-text'>Собеседование в офисе</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
              <path
                d='M7.5 26.25V25H5V26.25C5 28.5706 5.92187 30.7962 7.56282 32.4372C9.20376 34.0781 11.4294 35 13.75 35H17.5V32.5H13.75C12.0924 32.5 10.5027 31.8415 9.33058 30.6694C8.15848 29.4973 7.5 27.9076 7.5 26.25Z'
                fill='#0260E8' />
              <path
                d='M30 13.75V15H32.5V13.75C32.5 11.4294 31.5781 9.20376 29.9372 7.56282C28.2962 5.92187 26.0706 5 23.75 5H20V7.5H23.75C24.5708 7.5 25.3835 7.66166 26.1418 7.97575C26.9001 8.28984 27.5891 8.75022 28.1694 9.33058C28.7498 9.91095 29.2102 10.5999 29.5242 11.3582C29.8383 12.1165 30 12.9292 30 13.75Z'
                fill='#0260E8' />
              <path
                d='M13.75 13.75H6.25C5.25544 13.75 4.30161 14.1451 3.59835 14.8483C2.89509 15.5516 2.5 16.5054 2.5 17.5V20H5V17.5C5 17.1685 5.1317 16.8505 5.36612 16.6161C5.60054 16.3817 5.91848 16.25 6.25 16.25H13.75C14.0815 16.25 14.3995 16.3817 14.6339 16.6161C14.8683 16.8505 15 17.1685 15 17.5V20H17.5V17.5C17.5 16.5054 17.1049 15.5516 16.4017 14.8483C15.6984 14.1451 14.7446 13.75 13.75 13.75Z'
                fill='#0260E8' />
              <path
                d='M10 12.5C10.9889 12.5 11.9556 12.2068 12.7778 11.6574C13.6001 11.1079 14.241 10.327 14.6194 9.41342C14.9978 8.49979 15.0969 7.49446 14.9039 6.52455C14.711 5.55465 14.2348 4.66373 13.5355 3.96447C12.8363 3.26521 11.9454 2.789 10.9755 2.59608C10.0055 2.40315 9.00021 2.50217 8.08658 2.8806C7.17295 3.25904 6.39206 3.89991 5.84265 4.72215C5.29324 5.5444 5 6.5111 5 7.5C5 8.82609 5.52678 10.0979 6.46447 11.0355C7.40215 11.9732 8.67392 12.5 10 12.5ZM10 5C10.4945 5 10.9778 5.14662 11.3889 5.42133C11.8 5.69603 12.1205 6.08648 12.3097 6.54329C12.4989 7.00011 12.5484 7.50278 12.452 7.98773C12.3555 8.47268 12.1174 8.91814 11.7678 9.26777C11.4181 9.6174 10.9727 9.8555 10.4877 9.95197C10.0028 10.0484 9.50011 9.99892 9.04329 9.8097C8.58648 9.62048 8.19603 9.30005 7.92133 8.88893C7.64662 8.4778 7.5 7.99446 7.5 7.5C7.5 6.83696 7.76339 6.20108 8.23223 5.73223C8.70107 5.26339 9.33696 5 10 5Z'
                fill='#0260E8' />
              <path
                d='M33.75 31.25H26.25C25.2554 31.25 24.3016 31.6451 23.5983 32.3483C22.8951 33.0516 22.5 34.0054 22.5 35V37.5H25V35C25 34.6685 25.1317 34.3505 25.3661 34.1161C25.6005 33.8817 25.9185 33.75 26.25 33.75H33.75C34.0815 33.75 34.3995 33.8817 34.6339 34.1161C34.8683 34.3505 35 34.6685 35 35V37.5H37.5V35C37.5 34.0054 37.1049 33.0516 36.4017 32.3483C35.6984 31.6451 34.7446 31.25 33.75 31.25Z'
                fill='#0260E8' />
              <path
                d='M25 25C25 25.9889 25.2932 26.9556 25.8427 27.7779C26.3921 28.6001 27.173 29.241 28.0866 29.6194C29.0002 29.9978 30.0055 30.0969 30.9755 29.9039C31.9454 29.711 32.8363 29.2348 33.5355 28.5355C34.2348 27.8363 34.711 26.9454 34.9039 25.9755C35.0969 25.0055 34.9978 24.0002 34.6194 23.0866C34.241 22.173 33.6001 21.3921 32.7779 20.8427C31.9556 20.2932 30.9889 20 30 20C28.6739 20 27.4021 20.5268 26.4645 21.4645C25.5268 22.4021 25 23.6739 25 25ZM32.5 25C32.5 25.4945 32.3534 25.9778 32.0787 26.3889C31.804 26.8 31.4135 27.1205 30.9567 27.3097C30.4999 27.4989 29.9972 27.5484 29.5123 27.452C29.0273 27.3555 28.5819 27.1174 28.2322 26.7678C27.8826 26.4181 27.6445 25.9727 27.548 25.4877C27.4516 25.0028 27.5011 24.5001 27.6903 24.0433C27.8795 23.5865 28.2 23.196 28.6111 22.9213C29.0222 22.6466 29.5055 22.5 30 22.5C30.663 22.5 31.2989 22.7634 31.7678 23.2322C32.2366 23.7011 32.5 24.337 32.5 25Z'
                fill='#0260E8' />
            </svg>
          </li>
          <li className='steps__list-item steps__list-item--last' data-number='4'>
            <p className='steps__list-text'>Приступаете к работе</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
              <path
                d='M32.5 15H25V7.5C24.999 6.50574 24.6036 5.55249 23.9006 4.84945C23.1975 4.1464 22.2443 3.75099 21.25 3.75H18.5837C17.9827 3.75255 17.4025 3.9705 16.9484 4.36428C16.4943 4.75807 16.1964 5.3016 16.1088 5.89625L15.0525 13.2925L10.5813 20H2.5V37.5H28.75C31.0698 37.4974 33.2939 36.5746 34.9343 34.9343C36.5746 33.2939 37.4974 31.0698 37.5 28.75V20C37.4983 18.6744 36.971 17.4036 36.0337 16.4663C35.0964 15.529 33.8256 15.0017 32.5 15ZM10 35H5V22.5H10V35ZM35 28.75C34.998 30.407 34.3389 31.9956 33.1672 33.1672C31.9956 34.3389 30.407 34.998 28.75 35H12.5V21.6287L17.4475 14.2075L18.585 6.25H21.25C21.5815 6.25 21.8995 6.3817 22.1339 6.61612C22.3683 6.85054 22.5 7.16848 22.5 7.5V17.5H32.5C33.1628 17.5007 33.7983 17.7643 34.267 18.233C34.7357 18.7017 34.9993 19.3372 35 20V28.75Z'
                fill='#0260E8' />
            </svg>
          </li>
        </ul>
        <h2 className='title steps__form-title'>Сделайте первый шаг!</h2>
        <p className='text steps__form-text'>Мы перезвоним вам и назначим собеседование</p>
        <form action='#' className='form-1'>
          <label className=''>
            <span className='label'>Введите Ваше имя</span>
            <input className='input' type='text' name='name' placeholder='Например, Алексей' required={true} />
          </label>
          <label className=''>
            <span className=' label'>Введите Ваш телефон</span>
            <input className=' input' type='text' name='name' placeholder='+7 (___)___-__-__' required={true} />
          </label>
          <div className=' form-1__footer'>
            <button className='btn btn--primary' type='submit'>Получить постоянную работу</button>
            <p className='form-1__footer-text'>
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь
              c <a href='#'>политикой конфиденциальности</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Steps;

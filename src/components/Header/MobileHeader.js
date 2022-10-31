import './Header.scss';
import { useState } from 'react';

const MobileHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mobile-header">

    <div className='mobile-header__menu'>
      <span className='mobile-header__title'>Samčović</span>
      <button className='mobile-header__open' onClick={toggleHeader}></button>
    </div>

     <div className={isOpen ? 'mobile-header__list active': 'mobile-header__list' }>

     <button className="mobile-header__close" onClick={toggleHeader}></button>

          <button className='mobile-header__btn'>
            <i className="icon home"></i>
            <span>Home</span>
          </button>

          <button className='mobile-header__btn'>
            <i className="icon about"></i>
            <span>About</span>
          </button>


         <button className='mobile-header__btn'>
            <i className="icon skills"></i>
            <span>Skills</span>
          </button>


         <button className='mobile-header__btn'>
            <i className="icon services"></i>
            <span>Services</span>
          </button>


        <button className='mobile-header__btn'>
          <i className="icon portfolio"></i>
            <span>Portfolio</span>
         </button>

         <button className='mobile-header__btn'>
            <i className="icon contact"></i>
            <span>Contact</span>
          </button>

        </div>
    </div>
  )
};

export default MobileHeader;
import './Header.scss';
import { useState } from 'react';

const MobileHeader = ({toHome, toAbout, toSkills, toQualifications, toContact, toProjects}) => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleHeader = () => {
    setIsOpen(!isOpen);
  }

  const toHomeHandler = () => {
    setIsOpen(false);
    toHome();
  }


  const toAboutHandler = () => {
    setIsOpen(false);
    toAbout();
  }

  const toSkillsHandler = () => {
    setIsOpen(false);
    toSkills();
  }

  const toQualificationHandler = () => {
    setIsOpen(false);
    toQualifications();
  }

  const toContactHandler = () => {
    setIsOpen(false);
    toContact();
  }

  const toProjectshandler = () => {
    setIsOpen(false);
    toProjects();
  }

  return (
    <div className="mobile-header">

    <div className='mobile-header__menu'>
      <span className='mobile-header__title'>Samčović</span>
      <button className='mobile-header__open' onClick={toggleHeader}></button>
    </div>

     <div className={isOpen ? 'mobile-header__list active': 'mobile-header__list' }>

     <button className="mobile-header__close" onClick={toggleHeader}></button>

          <button className='mobile-header__btn' onClick={toHomeHandler}>
            <i className="icon icon-home"></i>
            <span>Home</span>
          </button>

          <button className='mobile-header__btn' onClick={toAboutHandler}>
            <i className="icon icon-about"></i>
            <span>About</span>
          </button>


         <button className='mobile-header__btn' onClick={toSkillsHandler}>
            <i className="icon icon-skills"></i>
            <span>Skills</span>
          </button>


         <button className='mobile-header__btn' onClick={toProjectshandler}>
            <i className="icon icon-projects"></i>
            <span>Projects</span>
          </button>


        <button className='mobile-header__btn' onClick={toQualificationHandler}>
          <i className="icon icon-portfolio"></i>
            <span>Qualifications</span>
         </button>

         <button className='mobile-header__btn' onClick={toContactHandler}>
            <i className="icon icon-contact"></i>
            <span>Contact</span>
          </button>

        </div>
    </div>
  )
};

export default MobileHeader;
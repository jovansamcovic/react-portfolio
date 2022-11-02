import './App.scss';
import './style/style.scss';
import MobileHeader from './components/Header/MobileHeader';
import { useEffect, useState } from 'react';
import QualificationMenu from './components/QualificationMenu/QualificationMenu';

function App() {

  const [activeItem, setActiveItem] = useState("Education");

  const QualificationMenuHandler = (value) => {
    setActiveItem(value);
  }


  return (
    <div className="App">
      <header>
        <MobileHeader />
      </header>

      <main className='main'>
      <div className='profile'>
          <ul className='social-media'>
            <li className='social-media__li instagram'></li>
            <li className='social-media__li linkedin'></li>
            <li className='social-media__li github'></li>
          </ul>
            <div className='profile__logo'>
              <div className='profile__logo-icon'></div>
            </div>
            <h3 className='profile__name'>Jovan Samčović <i className='icon hand'></i></h3>
            <h4 className='profile__vocation'>Frontend Developer</h4>
            <p className='profile__about'>I'm creative frontend developer based in Kragujevac, Serbia, and I'm very passionate and dedicated to my work.</p>
        </div>

        <div className='section'>
          <h3 className='section__title'>About</h3>
          <h4 className='section__subtitle'>My introduction</h4>
        </div>

        <div className='about'>
          <div className='about__img'>
            <div className='about__img-icon'></div>
          </div>
          <div className='about__info'>
              <div className='boxes'>

                <div className='box'>
                  <span className='box__icon experience'></span>
                  <strong className='box__title'>Experience</strong>
                  <span className='box__subtitle'>2+ Years</span>
                </div>

                <div className='box'>
                  <span className='box__icon job'></span>
                  <strong className='box__title'>Projects</strong>
                  <span className='box__subtitle'>30+ projects</span>
                </div>

                <div className='box'>
                  <span className='box__icon customerservice'></span>
                  <strong className='box__title'>Support</strong>
                  <span className='box__subtitle'>Online 24/7</span>
                </div>

              </div>
              <div className='about__description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Iure est vel voluptatibus sed sequi fugit, architecto
              perspiciatis! Beatae, doloribus! Numquam nobis quia
              ipsam sequi animi veniam ratione nam eos consequatur!
              </div>
              <a  href="https://www.facebook.com/" className='about__cv'>Download CV</a>
          </div>
        </div>

        <div className='section'>
          <h3 className='section__title'>Skills</h3>
          <h4 className='section__subtitle'>My technical level</h4>
        </div>

        <div className='skills'>

           <div className='skills__list'>


           <div className='skill'>
              <span className='skill__icon'></span>
              <strong>HTML</strong>
              <span className='skill__level'>Advanced</span>
            </div>

            <div className='skill'>
              <span className='skill__icon'></span>
              <strong>CSS</strong>
              <span className='skill__level'>Advanced</span>
            </div>

            <div className='skill'>
              <span className='skill__icon'></span>
              <strong>JS</strong>
              <span className='skill__level'>Intermediate</span>
            </div>


            <div className='skill'>
              <span className='skill__icon'></span>
              <strong>React</strong>
              <span className='skill__level'>Intermediate</span>
            </div>
           </div>
        </div>

        <div className='section'>
        <h3 className='section__title'>Qualification</h3>
        <h4 className='section__subtitle'>My personal journey</h4>
        </div>

        <div className='qualification'>

        <QualificationMenu selectedItem={QualificationMenuHandler}/>

        {activeItem == "Education" &&
          <div className='timeline'>
            <div className='timeline-container left'>
                <div className='timeline-content'>
                  <strong className='timeline-title'> Faculty of Science, University of Kragujevac</strong>
                  <span className='timline-subtitle'>Computer Science</span>
                  <div className='timeline-calendar'>
                    <i className='timeline-calendar__icon'></i>
                    <span className='timeline-calendar__value'>2015 - 2021</span>
                  </div>
                </div>
            </div>

            <div className='timeline-container right'>
                <div className='timeline-content'>
                  <strong className='timeline-title'>Medical school with student dormitory  "Sestre Ninkovic"</strong>
                  <span className='timline-subtitle'>Lab technician</span>
                  <div className='timeline-calendar'>
                    <i className='timeline-calendar__icon'></i>
                    <span className='timeline-calendar__value'>2011 - 2015</span>
                  </div>
                </div>
            </div>
        </div>
        }


        {activeItem == "Experience" &&
          <div className='timeline'>
            <div className='timeline-container left'>
                <div className='timeline-content'>
                  <strong className='timeline-title'>Logispin RS</strong>
                  <span className='timline-subtitle'>Frontend Developer</span>
                  <div className='timeline-calendar'>
                    <i className='timeline-calendar__icon'></i>
                    <span className='timeline-calendar__value'>2020 - present</span>
                  </div>
                </div>
            </div>

            <div className='timeline-container right'>
                <div className='timeline-content'>
                  <strong className='timeline-title'>Logispin RS</strong>
                  <span className='timline-subtitle'>Internship</span>
                  <div className='timeline-calendar'>
                    <i className='timeline-calendar__icon'></i>
                    <span className='timeline-calendar__value'>July 2020</span>
                  </div>
                </div>
            </div>
        </div>
        }


        </div>

      </main>

    </div>
  );
}

export default App;

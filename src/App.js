import "./App.scss";
import "./style/style.scss";
import MobileHeader from "./components/Header/MobileHeader";
import { useRef, useState } from "react";
import QualificationMenu from "./components/QualificationMenu/QualificationMenu";
import Footer from "./components/Footer/Footer";
import DesktopHeader from "./components/Header/DesktopHeader";

function App() {
    const [activeItem, setActiveItem] = useState("Education");

    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const qualification = useRef(null);
    const contact = useRef(null);

    const QualificationMenuHandler = (value) => {
        setActiveItem(value);
    };

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className="app" ref={home}>
            <header>
                <div className="container">
                    <MobileHeader
                        toHome={() => scrollToSection(home)}
                        toAbout={() => scrollToSection(about)}
                        toSkills={() => scrollToSection(skills)}
                        toQualification={() => scrollToSection(qualification)}
                        toContact={() => scrollToSection(contact)}
                    />

                    <DesktopHeader
                        toHome={() => scrollToSection(home)}
                        toAbout={() => scrollToSection(about)}
                        toSkills={() => scrollToSection(skills)}
                        toQualification={() => scrollToSection(qualification)}
                        toContact={() => scrollToSection(contact)}
                    />
                </div>
            </header>

            <div className="container">
                <main className="main">
                    <div className="profile">
                        <div className="scroll">
                            <span className="scroll__icon"></span>
                            <strong className="scroll__msg">Scroll down</strong>
                        </div>

                        <ul className="social-media">
                            <li className="social-media__li">
                                <a className="social-media__a instagram" href="https://www.instagram.com/j.samcovic/">
                                    {" "}
                                </a>
                            </li>
                            <li className="social-media__li">
                                <a className="social-media__a linkedin" href="https://www.linkedin.com/in/jovan-sam%C4%8Dovi%C4%87-753b1b151/">
                                    {" "}
                                </a>
                            </li>
                            <li className="social-media__li">
                                <a className="social-media__a github" href="https://github.com/jovansamcovic">
                                    {" "}
                                </a>
                            </li>
                        </ul>
                        <div className="profile__logo">
                            <div className="profile__logo-icon"></div>
                        </div>

                        <div className="profile__info">
                            <h3 className="profile__name">
                                Jovan Samčović <i className="icon hand"></i>
                            </h3>
                            <h4 className="profile__vocation">Frontend Developer</h4>
                            <p className="profile__about">I'm creative frontend developer based in Kragujevac, Serbia, and I'm very passionate and dedicated to my work.</p>
                        </div>
                    </div>

                    <div className="about" ref={about}>
                        <div className="section">
                            <h3 className="section__title">About</h3>
                            <h4 className="section__subtitle">My introduction</h4>
                        </div>

                        <div className="about__wrap">
                            <div className="about__img">
                                <div className="about__img-icon"></div>
                            </div>

                            <div className="about__info">
                                <div className="boxes">
                                    <div className="box">
                                        <span className="box__icon experience"></span>
                                        <strong className="box__title">Experience</strong>
                                        <span className="box__subtitle">2+ Years</span>
                                    </div>

                                    <div className="box">
                                        <span className="box__icon job"></span>
                                        <strong className="box__title">Projects</strong>
                                        <span className="box__subtitle">30+ projects</span>
                                    </div>

                                    <div className="box">
                                        <span className="box__icon customerservice"></span>
                                        <strong className="box__title">Support</strong>
                                        <span className="box__subtitle">Online 24/7</span>
                                    </div>
                                </div>
                                <div className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure est vel voluptatibus sed sequi fugit, architecto perspiciatis! Beatae, doloribus! Numquam nobis quia ipsam sequi animi veniam ratione nam eos
                                    consequatur!
                                </div>
                                <a href="https://www.facebook.com/" className="about__cv">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="skills" ref={skills}>
                        <div className="section">
                            <h3 className="section__title">Skills</h3>
                            <h4 className="section__subtitle">My technical level</h4>
                        </div>

                        <div className="skills__list">
                            <div className="skill">
                                <strong className="skill__title">HTML</strong>
                                <span className="skill__level">Advanced</span>
                            </div>

                            <div className="skill">
                                <strong className="skill__title">CSS</strong>
                                <span className="skill__level">Advanced</span>
                            </div>

                            <div className="skill">
                                <strong className="skill__title">JS</strong>
                                <span className="skill__level">Intermediate</span>
                            </div>

                            <div className="skill">
                                <strong className="skill__title">React</strong>
                                <span className="skill__level">Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification" ref={qualification}>
                        <div className="section">
                            <h3 className="section__title">Qualification</h3>
                            <h4 className="section__subtitle">My personal journey</h4>
                        </div>

                        <QualificationMenu selectedItem={QualificationMenuHandler} />

                        {activeItem === "Education" && (
                            <div className="timeline">
                                <div className="timeline-container left">
                                    <div className="timeline-content">
                                        <strong className="timeline-title"> Faculty of Science, University of Kragujevac</strong>
                                        <span className="timline-subtitle">Computer Science</span>
                                        <div className="timeline-calendar">
                                            <i className="timeline-calendar__icon"></i>
                                            <span className="timeline-calendar__value">2015 - 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-container right">
                                    <div className="timeline-content">
                                        <strong className="timeline-title">Medical school with student dormitory "Sestre Ninkovic"</strong>
                                        <span className="timline-subtitle">Lab technician</span>
                                        <div className="timeline-calendar">
                                            <i className="timeline-calendar__icon"></i>
                                            <span className="timeline-calendar__value">2011 - 2015</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeItem === "Experience" && (
                            <div className="timeline">
                                <div className="timeline-container left">
                                    <div className="timeline-content">
                                        <strong className="timeline-title">Logispin RS</strong>
                                        <span className="timline-subtitle">Frontend Developer</span>
                                        <div className="timeline-calendar">
                                            <i className="timeline-calendar__icon"></i>
                                            <span className="timeline-calendar__value">2020 - present</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-container right">
                                    <div className="timeline-content">
                                        <strong className="timeline-title">Logispin RS</strong>
                                        <span className="timline-subtitle">Internship</span>
                                        <div className="timeline-calendar">
                                            <i className="timeline-calendar__icon"></i>
                                            <span className="timeline-calendar__value">July 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="contact" ref={contact}>
                        <div className="section">
                            <h3 className="section__title">Contact Me</h3>
                            <h4 className="section__subtitle">Get in touch</h4>
                        </div>

                        <div className="contact__boxes">
                            <div className="contact__box">
                                <i className="icon icon-email"></i>
                                <strong className="contact__title">Email</strong>
                                <span className="contact__value">jsamcovic1996@gmail.com</span>
                                <div className="contact__msg">
                                    <span className="mr5">Write me</span>
                                    <i className="icon icon-right-arrow"></i>
                                </div>
                            </div>

                            <div className="contact__box">
                                <i className="icon icon-telegram"></i>
                                <strong className="contact__title">Telegram</strong>
                                <span className="contact__value">+38169-11-04-996</span>
                                <div className="contact__msg">
                                    <span className="mr5">Write me</span>
                                    <i className="icon icon-right-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default App;

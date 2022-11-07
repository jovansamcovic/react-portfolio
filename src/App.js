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
    const qualifications = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);

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
            <div className="container">
                <header>
                    <MobileHeader
                        toHome={() => scrollToSection(home)}
                        toAbout={() => scrollToSection(about)}
                        toSkills={() => scrollToSection(skills)}
                        toQualifications={() => scrollToSection(qualifications)}
                        toContact={() => scrollToSection(contact)}
                        toProjects={() => scrollToSection(projects)}
                    />

                    <DesktopHeader
                        toHome={() => scrollToSection(home)}
                        toAbout={() => scrollToSection(about)}
                        toSkills={() => scrollToSection(skills)}
                        toQualifications={() => scrollToSection(qualifications)}
                        toContact={() => scrollToSection(contact)}
                        toProjects={() => scrollToSection(projects)}
                    />
                </header>

                <main className="main">
                    <div className="profile">
                        <div className="scroll">
                            <span className="scroll__icon"></span>
                            <strong className="scroll__msg">Scroll down</strong>
                        </div>

                        <ul className="social-media">
                            <li className="social-media__li">
                                <a className="social-media__a instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/j.samcovic/">
                                    {" "}
                                </a>
                            </li>
                            <li className="social-media__li">
                                <a className="social-media__a linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jovan-sam%C4%8Dovi%C4%87-753b1b151/">
                                    {" "}
                                </a>
                            </li>
                            <li className="social-media__li">
                                <a className="social-media__a github" target="_blank" rel="noreferrer" href="https://github.com/jovansamcovic">
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
                                    The company where I currently work splits the frontend part into two teams,
                                    Template team and React team. My task as a member of the template team is to create a
                                    templates that will later be used by the React team. One template consists of HTML + CSS.
                                    This division is necessary due to the complexity of the company's projects, which are primarily
                                    bookmaking sites. In addition to bookmaking sites, I have experience in creating templates for
                                    internal dashboard-type projects. The template team is in charge of maintaining over 80 projects
                                    of different types. Desktop adaptive, Mobile adaptive, Responsive, Liquid...
                                    For easier servicing of all projects, we use our internal Wall-e framework.
                                    The framework existed even before I joined the company, but today I actively
                                    participate in its servicing and expansion. In addition to internal framework ,
                                    we try to follow all modern trends in layout frontend development. We use SCSS, 7-1 architecture and apply BEM methodology in creating templates.
                                    In the past few months I have been actively learning React and the plan is to cover the entire frontend part at some point.
                                    I believe that I have learned a lot in a short time, and you can best judge the level of my knowledge of React by looking
                                    at the section with my personal projects. If you have any additional questions, please contact me using one of
                                    the communication channels that you can find on this site.
                                </div>
                                <a href="/JovanSamcovicCV.pdf" download="JovanSamcovicCV.pdf" className="about__cv">
                                    Download CV
                                </a>
                                <p className="message">Currently only the Serbian version</p>
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

                    <div className="qualification" ref={qualifications}>
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


                    <div className="projects" ref={projects}>
                        <div className="section">
                            <h3 className="section__title">Projects</h3>
                            <h4 className="section__subtitle">My personal projects</h4>
                        </div>

                        <div className="projects__list">
                            <div className="project">
                                <div className="project__img star-wars"></div>
                                <strong className="project__name">Star Wars</strong>
                                <strong className="project__type desktop">Desktop</strong>
                                <ul className="project-menu">
                                    <li className="project-menu__item">
                                        <a className="project-menu__a" rel="noreferrer" target="_blank" href="https://star-wars-7dbd0.web.app/">Demo</a>
                                    </li>
                                    <li className="project-menu__item">
                                        <a className="project-menu__a" rel="noreferrer" target="_blank" href="https://github.com/jovansamcovic/react-app-star-wars">Github</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

                <Footer />
            </div>
        </div>
    );
}

export default App;

import "./App.scss";
import "./style/style.scss";
import MobileHeader from "./components/Header/MobileHeader";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";
import DesktopHeader from "./components/Header/DesktopHeader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualifications from "./components/Qualifications/Qualifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {

    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const qualifications = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);

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
                    <ScrollToTop />

                    <Profile home={home} />
                    <About about={about} />
                    <Skills skills={skills}/>
                    <Qualifications qualifications={qualifications}/>
                    <Projects projects={projects}/>
                    <Contact contact={contact}/>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default App;

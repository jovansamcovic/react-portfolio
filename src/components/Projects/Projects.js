import './Projects.scss';

const Projects = (props) => {
  return (
    <div className="projects" ref={props.projects}>
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

        <div className="project">
            <div className="project__img cv"></div>
            <strong className="project__name">Resume</strong>
            <strong className="project__type responsive">Responsive</strong>
            <ul className="project-menu">
                <li className="project-menu__item">
                    <a className="project-menu__a" rel="noreferrer" target="_blank" href="https://github.com/jovansamcovic/react-portfolio">Github</a>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Projects;
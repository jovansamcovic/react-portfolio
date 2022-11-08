import './Skills.scss';

const Skills = (props) => {
  return (
      <div className="skills" ref={props.skills}>
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
  );
};

export default Skills;

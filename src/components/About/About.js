import './About.scss';
const About = (props) => {
  return (
      <div className="about" ref={props.about}>
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
                      The company where I currently work splits the frontend part into two teams, Template team and React team. My task as a member of the template team is to create a templates that will later be used by the React team.
                      One template consists of HTML + CSS. This division is necessary due to the complexity of the company's projects, which are primarily bookmaking sites. In addition to bookmaking sites, I have experience in creating
                      templates for internal dashboard-type projects. The template team is in charge of maintaining over 80 projects of different types. Desktop adaptive, Mobile adaptive, Responsive, Liquid... For easier servicing of all
                      projects, we use our internal Wall-e framework. The framework existed even before I joined the company, but today I actively participate in its servicing and expansion. In addition to internal framework , we try to
                      follow all modern trends in layout frontend development. We use SCSS, 7-1 architecture and apply BEM methodology in creating templates. In the past few months I have been actively learning React and the plan is to
                      cover the entire frontend part at some point. I believe that I have learned a lot in a short time, and you can best judge the level of my knowledge of React by looking at the section with my personal projects. If you
                      have any additional questions, please contact me using one of the communication channels that you can find on this site.
                  </div>
                  <a href="/JovanSamcovicCV.pdf" download="JovanSamcovicCV.pdf" className="about__cv">
                      Download CV
                  </a>
                  <p className="message">Currently only the Serbian version</p>
              </div>
          </div>
      </div>
  );
};

export default About;

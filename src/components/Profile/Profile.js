import './Profile.scss';

const Profile = () => {
  return (
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
  );
};

export default Profile;

import './Contact.scss';

const Contact = (props) => {
  return (
      <div className="contact" ref={props.contact}>
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
  );
};

export default Contact;

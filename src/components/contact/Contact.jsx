import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import {useContext, useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {ThemeContext} from '../../context';

const Contact = () => {
  const formRef = useRef ();
  const [done, setDone] = useState (false);
  const theme = useContext (ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = e => {
    e.preventDefault ();
    e.target.reset ();
    emailjs
      .sendForm (
        'service_ayjuz2f',
        'template_mfwsoa3',
        formRef.current,
        'user_ZW5cdrDOgnAWxxaY8v66S'
      )
      .then (
        result => {
          console.log (result.text);
          setDone (true);
        },
        error => {
          console.log (error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Discutons de votre projet</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              {' '}  <a href="tel:O7.53.58.87.59">
                <img src={Phone} alt="" className="contact-icon" />

                O7.53.58.87.59
              </a>
            </div>
            <div className="contact-info-item">
              {' '}<a href="mailto:ousseynoufofana15@gmail.com">
                <img className="contact-icon" src={Email} alt="" />

                ousseynoufofana15@gmail.com
              </a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Paris, France
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1 className="contact-desc">
            Contactez-Moi.
          </h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="field">
              <input
                style={{backgroundColor: darkMode && '#333'}}
                type="text"
                id="name"
                className="form-control"
                name="user_name"
                required
              />
              <label htmlFor="name" className="form-control-placeholder">
                Name
              </label>
            </div>
            <div className="field">
              <input
                style={{backgroundColor: darkMode && '#333'}}
                type="text"
                id="subjet"
                className="form-control"
                name="user_subject"
                required
              />
              <label htmlFor="subjet" className="form-control-placeholder">
                Subject
              </label>
            </div>
            <div className="field">

              <input
                style={{backgroundColor: darkMode && '#333'}}
                type="email"
                id="email"
                className="form-control"
                name="user_email"
                required
              />
              <label htmlFor="email" className="form-control-placeholder">
                Email
              </label>
            </div>
            <div className="field">
              <textarea
                style={{backgroundColor: darkMode && '#333'}}
                rows="5"
                id="message"
                className="form-control"
                name="message"
                required
              />
              <label htmlFor="message" className="form-control-placeholder">
                Message
              </label>
            </div>

            <button>Envoyer</button>
            {done && 'Merci Message envoyé...'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

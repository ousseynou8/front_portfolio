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
    <div className="vh-100 position-relative">
      <div className="c-bg" />
      <div className="row p-5 c-wrapper">
        <div className="col-lg-6 mx-auto c-left">
          <h1 className="display-3 w-30 c-title">
            Discutons de votre projet
          </h1>
          <div className="d-lg-flex flex-column c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="img-fluid c-icon" />
              07 53 58 87 59
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className=" c-icon" />
              ousseynoufofana15@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Paris France
            </div>
          </div>
        </div>
        <div className="col-lg-6 c-right">
          <p className="c-desc">
            Contactez-Moi
          </p>
          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                style={{backgroundColor: darkMode && '#333'}}
                type="text"
                placeholder="Nom"
                name="user_name"
              />
              <label htmlFor="floatingInput">Nom</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                style={{backgroundColor: darkMode && '#333'}}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <label htmlFor="floatingInput">Objet</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                style={{backgroundColor: darkMode && '#333'}}
                type="email"
                placeholder="Email"
                name="user_email"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                style={{backgroundColor: darkMode && '#333'}}
                id="floatingTextarea"
                name="message"
                placeholder="Message"
                rows="5"
              />
              <label htmlFor="floatingTextarea">Message</label>

            </div>

            <button className="btn btn-primary" type="submit">Envoyer</button>
            {done && 'merci pour votre message'}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

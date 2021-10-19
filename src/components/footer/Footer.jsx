//import {BrowserRouter, Link} from 'react-router-dom';
 
import './footer.css';

const Footer = () => {
  return (
    <div className="f">

      <div className="f-r">
        <h3>Suivez moi sur les reseau sociaux</h3>
        <div
          
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://fr.linkedin.com/in/ousseynou-fofana-8276221a2?trk=profile-badge"
           target="_blank" rel="noopener noreferrer">
   
          </a>
        </div>

        <a href="https://fofdesign.fr">
         
        </a>
        <a href="https://fofdesign.fr">
          {' '}<i className="fab fa-facebook-square" />
        </a>
        <a href="https://fofdesign.fr">
          <i className="fab fa-facebook-square" />
        </a>

      </div>

      <div className="f-p">
        <p>
          Copyright &copy; Tous droits reserves

        </p>
      </div>
    </div>
  );
};

export default Footer;

import './intro.css';
import Me from '../../img/4-removebg-preview.png';
import Typed from 'react-typed';
const Intro = () => {
  return (
    <div className="i">
      <div>
        <svg
          className="position-absolute w-100  top-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,240C384,256,480,192,576,170.7C672,149,768,171,864,176C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div>
        <svg
          style={{zIndex: '1'}}
          className="position-absolute w-100  bottom-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,234.7C384,256,480,256,576,245.3C672,235,768,213,864,208C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="i-left flex-column">
        <div className="i-left-wrapper ">
          <h2 className="i-intro">Hello, Mon Nom est</h2>
          <h1 className="i-name">Ousseynou FOFANA</h1>
          <div className="i-title">
            <Typed
              strings={[
                'Développeur Web',
                'Integrateur Web',
                'Designer Web',
                'Concepteur Web',
                'Technicien Informatique',
              ]}
              typeSpeed={40}
              backSpeed={70}
              loop={true}
            />
          </div>
          <p className="i-desc">

            Passionné par l'informatique le numérique en generale depuis mon enfance. je transforme votre maquette .....
            {' '}
          </p>
        </div>

        <div className=" d-sm-flex text-center w-100" style={{zIndex: '1'}}>

          <a
            class="btn btn-lg border-0   m-2"
            href="img\alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            download="img/alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-disabled="true"
          >
            Telecharger Cv
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{marginLeft: '.2rem'}}
              fill="currentColor"
              class="bi bi-arrow-down-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
              />
            </svg>

          </a>

          <a
            class="btn  btn-lg border-0 m-2"
            href="img\alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            download="img/alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-disabled="true"
          >

            Parlez moi de votre projet

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{marginLeft: '.2rem'}}
              fill="currentColor"
              class="bi bi-inbox"
              viewBox="0 0 16 16"
            >
              <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
            </svg>

          </a>

        </div>
      </div>

      {/* right  */}
      <div className="i-right">
        {/* image */}
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

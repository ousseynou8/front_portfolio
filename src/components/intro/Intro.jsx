import './intro.css';
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="container-fluid p-0">
    <div className="row vh-100 intro">
      <div className="col col-lg-6 d-flex align-items-center justify-content-center intro-left">
        <div className="d-flex flex-column justify-content-space-around vh-100  intro-left-wrapper">
          <h2 className="intro-hello">Hello, C'est </h2>
          <h1 className="intro-name">Ousseynou</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Integrateur</div>
              <div className="intro-title-item">Développeur</div>
              <div className="intro-title-item">Concepteur</div>
            </div>
          </div>
          <p className="intro-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque ex obcaecati excepturi, voluptas aliquam eum perferendis explicabo laborum odio nobis molestiae consequatur. Libero in amet voluptatum, repellendus doloremque facere.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="col col-lg-6 position-relative intro-right">
        <div className="w-100 h-100 position-absolute intro-bg"></div>
<img src={Me} alt="" className="w-100 h-100 position-absolute intro-img" />

      </div>
    </div>
     </div>
  );
};

export default Intro;

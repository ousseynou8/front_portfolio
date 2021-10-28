import './intro.css';
import Me from '../../img/me.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, Mon Nom est</h2>
          <h1 className="i-name">Ousseynou FOFANA</h1>
          <div className="i-title">
            <div className="i-title-wrapper">

              <div className="i-title-item">Développeur Web</div>
              <div className="i-title-item">Integrateur Web</div>
              <div className="i-title-item">Designer Web</div>
              <div className="i-title-item">Concepteur Web</div>
              <div className="i-title-item">Technicien Informatique</div>
            </div>
          </div>
          <p className="i-desc">

            Passionné par le numérique depuis mon enfance.
            En commençant au Sénégal, j'ai suivi pendant 2 ans une formation dans le domaine
            de l'informatique et j’ai appris pendant cette formation les bases de l'informatique
            {' '}
            et j’ai découvert le développement web. J’ai développé des compétences en HTML5, CSS3,
            {' '}
            PHP et JavaScript. Quand je suis arrivé en France, j'ai suivi le Parcours découverte
            {' '}
            des métiers du numérique au Grêta. J’ai travaillé mon projet professionnel et surtout
            j’ai confirmé mon choix : devenir développeur web. J’ai décidé de suivre une formation
            Intensive de 3 mois et demi Chez Webforce3 et une formation continue de 8 mois au sein
            {' '}
            du Grêta pour un Titre professionnel(CDA), dont 2 mois de stage. Donc Je souhaite
            {' '}
            continuer sur ma voie en suivant une formation chez Openclassrooms pour continuer
            {' '}
            à me former.
          </p>

          <a
            href="img\alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            download="img/alter_CV_2021-06-08_Ousseynou_Fofana.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger CV
            <svg
              aria-hidden="true"
              focusable="false"
              width="30px"
              height="20px"
              data-prefix="fas"
              data-icon="arrow-down"
              className="svg-inline--fa fa-arrow-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
              />
            </svg>

          </a>

        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
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
      <div className="i-right">
        <div className="i-bg" />
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

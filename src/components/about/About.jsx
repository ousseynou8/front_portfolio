import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/5-removebg-preview.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">À propos de moi</h1>
        <p className="a-sub">
         Le plus lourde fardeau, c'est d'exister sans vivre
        </p>
        <p className="a-desc">
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
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
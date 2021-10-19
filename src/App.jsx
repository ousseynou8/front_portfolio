import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import PortfolioItem from './components/portfolioItem/PortfolioItem';
import './globals.css';
import Competence from './components/competence/Competence';

const App = () => {
  return (
    <div>

      <Intro />
<Competence   />
      <PortfolioItem />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

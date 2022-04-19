import './globals.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import PortfolioItem from './components/portfolioItem/PortfolioItem';
 import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";
import { useContext } from 'react';
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
<Toggle />
      <Intro />
<About /> 
      <PortfolioItem />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

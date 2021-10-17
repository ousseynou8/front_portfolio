import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import PortfolioItem from './components/portfolioItem/PortfolioItem';
import Toggle from './components/toggle/Toggle';
import {ThemeContext} from './context';
import {useContext} from 'react';
import './globals.css';

const App = () => {
  const theme = useContext (ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >

      <Toggle />

      <Intro />

      <PortfolioItem />
      <Contact />

    </div>
  );
};

export default App;

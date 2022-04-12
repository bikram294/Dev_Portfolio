import React from 'react';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Profiles from './components/MyProfiles/Profiles';

const App = () => {
  return (
      <>
      <Header></Header>
      <Nav></Nav>
      <About/>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Profiles></Profiles>
      <Contact></Contact>
      <Footer></Footer>

      </>
  )
}

export default App;

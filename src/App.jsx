import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Passion from "./components/Passion/Passon";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Passion />
      <ContactMe />
      <SocialLinks />
    </>
  );
};

export default App;

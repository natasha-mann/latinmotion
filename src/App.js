import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HeroImage from "./components/HeroImage";
import About from "./sections/About";
import Classes from "./sections/Classes";
import Events from "./sections/Events";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <HeroImage />
      <About />
      <Classes />
      {/* <Events /> */}
      <Footer />
    </div>
  );
};

export default App;

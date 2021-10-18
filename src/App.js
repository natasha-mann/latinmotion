import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HeroImage from "./components/HeroImage";
import About from "./sections/About";
import Classes from "./sections/Classes";
import Events from "./sections/Events";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <HeroImage />
      <About />
      <Classes />
      <Events />
    </div>
  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HeroImage from "./components/HeroImage";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <HeroImage />
      <About />
    </div>
  );
};

export default App;

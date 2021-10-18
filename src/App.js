import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import HeroImage from "./components/HeroImage";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <HeroImage />
    </div>
  );
};

export default App;

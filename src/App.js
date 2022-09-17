import "./styles/App.scss";
import Home from "./components/Home";
import Specialities from "./components/Specialities";
import AboutUs from "./components/AboutUs";
import Facts from "./components/Facts";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Specialities />
      <AboutUs />
      <Facts />
      <Reservations/>
      <Footer />
    </div>
  );
}

export default App;

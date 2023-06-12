import "./App.css";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Lecturer from "./components/Lecturer/Lecturer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Choose />
      <Lecturer />
      <Footer />
    </div>
  );
}

export default App;

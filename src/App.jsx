import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MidSection from "./components/MidSection";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleFilters = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <>
      <Header />
      <HeroSection />
      <MidSection onToggleFilter={toggleFilters} isHidden={isHidden} />
      <Filters stateVariable={isHidden} />
      <Footer />
    </>
  );
}

export default App;

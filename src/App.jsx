import { useEffect } from "react";
import About from "./components/Layouts/About";
import Contact from "./components/Layouts/Contact";
import Experience from "./components/Layouts/Experience";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Home from "./components/Layouts/Home";
import Portfolio from "./components/Layouts/Portfolio";
import Services from "./components/Layouts/Services";
import Skills from "./components/Layouts/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  console.log("re-render");
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

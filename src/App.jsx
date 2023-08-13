import About from "./components/Layouts/About";
import Contact from "./components/Layouts/Contact";
import Experience from "./components/Layouts/Experience";
import { Header } from "./components/Layouts/Header";
import Home from "./components/Layouts/Home";
import Portfolio from "./components/Layouts/Portfolio";
import Services from "./components/Layouts/Services";
import Skills from "./components/Layouts/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;

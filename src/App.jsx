import About from "./components/Layouts/About";
import Contact from "./components/Layouts/Contact";
import Experience from "./components/Layouts/Experience";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Home from "./components/Layouts/Home";
import Portfolio from "./components/Layouts/Portfolio";
import Services from "./components/Layouts/Services";
import Skills from "./components/Layouts/Skills";

function App() {
  console.log("re-render");

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

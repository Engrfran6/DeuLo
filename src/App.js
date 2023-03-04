import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes> */}
    </>
  );
}

export default App;

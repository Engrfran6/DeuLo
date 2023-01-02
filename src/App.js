import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
    </BrowserRouter>
  );
}

export default App;

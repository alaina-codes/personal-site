import './App.css';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

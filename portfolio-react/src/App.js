import './App.css';
import AboutMe from './components/sections/AboutMe';
import Experience from './components/sections/Experience';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;


// src/
//   components/
//     layout/
//       Header.js
//       Footer.js
//     sections/
//       About.js
//       Projects.js
//       Contact.js
//   App.js
//   index.js
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AboutMe from './components/sections/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
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
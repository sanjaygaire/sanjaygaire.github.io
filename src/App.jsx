import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

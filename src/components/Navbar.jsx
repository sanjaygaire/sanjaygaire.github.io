import { Link } from 'react-scroll';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <a className="navbar-brand" href="/">Sanjay Gaire</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="hero" smooth={true} duration={500} className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link" href="#">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>

          <button
            className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-fill"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}

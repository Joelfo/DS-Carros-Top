import "./styles.css";
import "@popperjs/core";
import "bootstrap/js/src/collapse";
import { ReactComponent as HamburguerMenuImg } from "assets/images/hamburguer-menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md main-menu">
      <div className="container-fluid items-container">
        <Link className="navbar-brand menu-title" to="/">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HamburguerMenuImg className="navbar-toggler-icon hamburguer-icon" />
        </button>

        <div
          className="collapse navbar-collapse d-md-flex flex-md-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link menu-option active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-option" to="/catalog">
                Catálogo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

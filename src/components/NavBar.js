import { Link } from "react-router-dom";
import "../styles/components/_navBar.scss";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <h2>Accueil</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/qui-suis-je"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <h2>Qui suis-je ?</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <h2>Portfolio</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

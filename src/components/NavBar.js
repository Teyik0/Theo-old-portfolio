import { Outlet, Link } from "react-router-dom";
import "../styles/components/_navBar.scss";

export default function NavBar() {
  return (
    <div className="navbar-content">
      <nav className="nav-list">
        <Link className="nav-item" to="/">
          <h2>Accueil</h2>
        </Link>
        <Link className="nav-item" to="qui-suis-je">
          <h2>Qui suis-je ?</h2>
        </Link>
        <Link className="nav-item" to="portfolio">
          <h2>Portfolio</h2>
        </Link>
        <Link className="nav-item" to="contact">
          <h2>Contact</h2>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

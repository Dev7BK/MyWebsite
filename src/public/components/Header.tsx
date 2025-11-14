import placeHolder from "assets/placeholder.svg";
import "../scss/header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <nav className="site-nav">
        <div className="nav-container">
          <a href="/" className="nav-brand">
            <img src={placeHolder} alt="Logo" className="nav-brand__logo" />
          </a>

          <div className="nav-actions">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="btn-menu-toggle"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="btn-menu-toggle__icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          <div className="nav-menu-wrapper" id="navbar-cta">
            <ul className="nav-menu">
              <li className="nav-menu__item">
                <a
                  href="#home"
                  className="nav-menu__link nav-menu__link--active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="/#about" className="nav-menu__link">
                  Über mich
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="/#services" className="nav-menu__link">
                  Music
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="/#contact" className="nav-menu__link">
                  Kontakt
                </a>
              </li>
              <li className="nav-menu__item">
                <a
                  href="https://www.instagram.com/bilal.krl7"
                  className="nav-menu__link"
                >
                  <img className="icon" src={placeHolder} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

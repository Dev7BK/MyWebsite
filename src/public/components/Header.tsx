import placeHolder from "assets/placeholder.svg";
import instaIcon from "assets/instagram.svg";
import "../scss/header.scss";

const Header = () => {
  const openInNewTab = (
    url: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
                <a href="/#about-me" className="nav-menu__link">
                  About me
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="/#music" className="nav-menu__link">
                  Music
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="/#contact" className="nav-menu__link">
                  Contact
                </a>
              </li>
              <li className="nav-menu__item">
                <a
                  className="nav-menu__link"
                  href="/instagram"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                  ) =>
                    openInNewTab("https://www.instagram.com/bilal.krl7", event)
                  }
                >
                  <img className="icon" src={instaIcon} alt="Instagram" />
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

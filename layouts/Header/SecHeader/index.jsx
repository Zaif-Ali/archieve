import Link from "next/link";

const SecHeader = ({ Logo, dropdownItem, MenuInfo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white   " id="banner">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" style={{ paddingLeft: "10px" }} />
          <span class="headtext"> Rise Eco Platform</span>
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Governance
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={"/about"}>
                  <a className="dropdown-item" href="about">
                    About us
                  </a>
                </Link>
                <Link href={"/PrivacyPolicy"}>
                  <a className="dropdown-item" href="PrivacyPolicy">
                    Privacy Policy
                  </a>
                </Link>

                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <Link href={"/WhitePaper"}>
                <a className="dropdown-item" href="WhitePaper">
                  White Paper
                </a></Link>
                <Link href={"/Tokenomics"}>
                <a className="dropdown-item" href="Tokenomics">
                  Tokenomics
                </a></Link>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Developer
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  About us
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <a className="dropdown-item" href="#">
                  White Paper
                </a>
                <a className="dropdown-item" href="#">
                  Tokenomics
                </a>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  About us
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <a className="dropdown-item" href="#">
                  White Paper
                </a>
                <a className="dropdown-item" href="#">
                  Tokenomics
                </a>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marketplace
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  About us
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <a className="dropdown-item" href="#">
                  White Paper
                </a>
                <a className="dropdown-item" href="#">
                  Tokenomics
                </a>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ecosystem
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  About us
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <a className="dropdown-item" href="#">
                  White Paper
                </a>
                <a className="dropdown-item" href="#">
                  Tokenomics
                </a>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FAQ
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  About us
                </a>
                <a className="dropdown-item" href="#">
                  Privacy Policy
                </a>
                <a className="dropdown-item" href="#">
                  Terms and Condition
                </a>
                <a className="dropdown-item" href="#">
                  White Paper
                </a>
                <a className="dropdown-item" href="#">
                  Tokenomics
                </a>
                <a className="dropdown-item" href="#">
                  Roadmap
                </a>
                <a className="dropdown-item" href="#">
                  Operating Agreement
                </a>
              </div>
            </li>
            <li className="lh-55px">
              <a href="#" className="btn login-btn ml-50">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;

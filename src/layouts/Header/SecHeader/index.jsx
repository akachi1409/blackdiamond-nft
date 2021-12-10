import { NavLink } from "react-router-dom";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src={Logo} alt="logo" /></span></a>
          {/* Toggler/collapsibe Button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {dropdownItem && dropdownItem.map((item , key) => (
                      <NavLink key={key} className="dropdown-item" to={item.path}>{item.nameLink}</NavLink>
                  ))}
                </div>
              </li>
              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}
              <li className="lh-55px"><a href="#" className="btn login-btn ml-50">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;
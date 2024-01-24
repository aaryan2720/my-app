
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.abouttext}</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More Information
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Clients</a></li>
              <li><a className="dropdown-item" href="/">Marketing scale</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Products and Services</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search for products and services..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        
          <div className={"form-check form-switch text -${props.mode === 'light'? 'dark': 'light'}"}>
              <input className="form-check-input mx-1" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label mx-1" htmlfor="flexSwitchCheckDefault">DarkMode</label>
          </div>
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    abouttext: 'set about text here'
}
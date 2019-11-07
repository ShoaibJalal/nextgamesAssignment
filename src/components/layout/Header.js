import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/incidents" className="nav-link">
                <i className="fas fa-info" /> Incidents
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/status/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: "Status App"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

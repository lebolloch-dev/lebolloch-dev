import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/" title="page d'acceuil" className="logo">
        <img
          src={process.env.PUBLIC_URL + "../img/logo/logo_noir.svg"}
          alt="logo lebolloch_dev : Développeur web / intégrateur web"
        />
      </NavLink>
      <ul className="reseaux">
        <li>
          <NavLink
            // className={showLinks ? "show bar" : null}
            exact
            to="/"
            title="page d'acceuil"
            activeClassName="nav-activ"
            // onClick={() => {
            //   setShowLinks(false);
            // }}
          >
            <h2>Home</h2>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            // className={showLinks ? "show bar2" : null}
            exact
            to="/projects"
            title="page des projets"
            activeClassName="nav-activ"
            // onClick={() => {
            //   setShowLinks(false);
            // }}
          >
            <h2>Projects</h2>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            // className={showLinks ? "show bar3" : null}
            exact
            to="/skills"
            title="page des skills"
            activeClassName="nav-activ"
            // onClick={() => {
            //   setShowLinks(false);
            // }}
          >
            <h2>Skills</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={showLinks ? "show bar4" : null}
            exact
            to="/about"
            title="page des infos personnel"
            activeClassName="nav-activ"
            // onClick={() => {
            //   setShowLinks(false);
            // }}
          >
            <h2>About</h2>
          </NavLink>
        </li>
      </ul>
      <div className="copyright">
        <i className="far fa-copyright"></i>
        <p>2021</p>
        <p>Lebolloch_Dev</p>
      </div>
    </header>
  );
};

export default Header;

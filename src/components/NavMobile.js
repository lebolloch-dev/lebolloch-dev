import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className="nav-mobile">
        <ul>
          <li>
            <NavLink
              className={showLinks ? "show bar2" : null}
              exact
              to="/"
              title="page d'acceuil'"
              activeClassName="nav-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <i class="fas fa-home"></i>
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={showLinks ? "show bar3" : null}
              exact
              to="/skills"
              title="page des skills"
              activeClassName="nav-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <i class="far fa-chart-bar"></i>
              <h3>Skills</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={showLinks ? "show bar4" : null}
              exact
              to="/about"
              title="page des infos personnel"
              activeClassName="nav-activ"
              onClick={() => {
                setShowLinks(false);
              }}
            >
              <i class="far fa-address-card"></i>
              <h3>About</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="home-click">
        <NavLink
          className={showLinks ? "show bar" : null}
          exact
          to="/"
          title="page d'acceuil"
          activeClassName="nav-activ"
          onClick={() => {
            setShowLinks(false);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "../img/logo/logo_noir.svg"}
            alt="logo lebolloch_dev : Développeur web / intégrateur web"
          />
        </NavLink>
      </div>
    </>
  );
};

export default NavMobile;

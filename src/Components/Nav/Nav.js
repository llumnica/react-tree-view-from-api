import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className="navButton"
            activeclassname="activeLink"
            tag={Link}
            to="/"
          >
            Complete Tree
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navButton"
            activeclassname="activeLink"
            tag={Link}
            to="/second"
          >
            Axios Call Tree
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

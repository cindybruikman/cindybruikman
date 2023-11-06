import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import LogoNav from "../img/LogoNav.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
        {/* <img src={LogoNav} alt="Logo" className={classes.logo} /> */}
      </nav>
    </header>
  );
}

export default MainNavigation;

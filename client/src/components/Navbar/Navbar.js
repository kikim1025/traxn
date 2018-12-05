import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar__logo">
        <a href="/" />
      </div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul className="nav-left">
          <li>
            <a href="/">
              <i className="fa fa-home" />Home
            </a>
          </li>
          <li>
            <a href="/scoreboard">
              <i className="fa fa-star" />Scoreboard
            </a>
          </li>
          <li>
            <a href="/alerts">
              <i className="fa fa-bell" />Alerts
            </a>
          </li>
          <li>
            <a href="/messages">
              <i className="fa fa-envelope" />Messages
            </a>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <a href="/post">
              <i className="fa fa-edit" />Post
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;

import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import classNames from "classnames";
import whiteLogo from "../../assets/logo-white.png";
import useMediaQuery from "react-responsive";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1281 });
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    document.querySelectorAll(".nav-container-list-item a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.body.addEventListener("click", (event) => {
      if (!event.target.closest(".burger-menu") && menuOpen) {
        closeMenu();
      }
    });

    return () => {
      //
      document
        .querySelectorAll(".nav-container-list-item a")
        .forEach((link) => {
          link.removeEventListener("click", closeMenu);
        });
      document.body.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <nav className="nav-container">
      <Link to="/homepage">
        <img src={whiteLogo} alt="unifyfootball-white-logo" className="logo" />
      </Link>
      <div
        className={classNames("burger-menu", { open: menuOpen })}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={classNames("nav-container-list", {
          open: menuOpen,
          active: isDesktop,
        })}
      >
        <li className="nav-container-list-item">
          <NavLink to="/homepage">Acasă</NavLink>
        </li>
        <li className="nav-container-list-item">
          <NavLink to="/about-us">Despre noi</NavLink>
        </li>
        <li className="nav-container-list-item">
          <NavLink to="/news">Știri</NavLink>
        </li>
        <li className="nav-container-list-item">
          <NavLink to="/standings">Clasament</NavLink>
        </li>
        <li className="nav-container-list-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

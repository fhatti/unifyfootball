import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logoTxt from "../../assets/logo-text-white.png";

/*ICONS*/
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
/*ICONS*/

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container footer-container-l">
        <div className="footer-container-item footer-links">
          <Link className="footer-link" to="/homepage">
            Acasă
          </Link>
          <Link className="footer-link" to="/about-us">
            Despre noi
          </Link>
          <Link className="footer-link" to="/news">
            Știri
          </Link>
          <Link className="footer-link" to="/standings">
            Clasament
          </Link>
          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="footer-container-item center footer-us">
          <div className="social-media">
            <p className="footer-social">Urmărește-ne și pe</p>
            <div className="footer-social-icons ">
              <Link
                to="https://www.facebook.com/profile.php?id=61550595976713"
                className="icon"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/unifyfootball.ro/"
                className="icon"
              >
                <FaInstagram />
              </Link>
              <Link to="https://discord.gg/3EBntWgN" className="icon">
                <FaDiscord />
              </Link>
            </div>
          </div>
          <p className="footer-adress center">
            <span className="icon-location icon">{<FaLocationArrow />}</span>{" "}
            România, Brașov,{" "}
            <span className="bold-700">strada Aleea Marcu, nr. 12</span>
          </p>
        </div>
      </div>

      <div className="footer-container footer-container-r">
        <img src={logoTxt} alt="unify-white-text-logo" className="logo-txt" />
        <p className="copyright">
          <span className="icon">{<FaCopyright />}</span>2024 Unify Football.
          Toate drepturile rezervate
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import Layout from "../../components/Layout/Layout"

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  return (
    <div>
      <Layout>
      <div className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Întrebări?</h3>
            <p className="text">
              Te vom contacta în maxim 24 de ore. Suntem disponibili de luni
              până vineri între orele 9:00 și 17:00!
            </p>

            <div className="info">
              <div className="information">
                <p>
                  <span className="">
                    <FaLocationArrow />
                  </span>
                  <Link to="https://maps.app.goo.gl/zVD6qQasbbsQMEgdA">
                    România, Brașov, strada Aleea Marcu,nr. 12
                  </Link>
                </p>
              </div>
              <div className="information">
                <p>
                  <span className="">
                    <FaEnvelope />
                  </span>
                  <Link to="mailTo:contact@unifyfootball.com">
                    contact@unifyfootball.com
                  </Link>
                </p>
              </div>
              <div className="information">
                <p>
                  <span className="">
                    <FaPhoneAlt />
                  </span>
                  <Link to="tel:0233345678">0233345678</Link>
                </p>
              </div>
            </div>

            <div className="social-media-contact">
              <p>Urmărește-ne și pe</p>
              <div className="social-icons">
                <Link
                  to="https://www.facebook.com/profile.php?id=61550595976713"
                  className=""
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/unifyfootball.ro/"
                  className=""
                >
                  <FaInstagram />
                </Link>
                <Link to="https://discord.gg/3EBntWgN" className="">
                  <FaDiscord />
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autoComplete="off">
              <h3 className="title">Contactează-ne</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
import Layout from "../../components/Layout/Layout";
import Logo404 from "../../assets/404.png";
import Referee from "../../assets/404svg.png";

const Page404 = () => {
  return (
    <>
      <Layout>
      <div className="page404">
        <div className="page404-container">
          <img
            src={Logo404}
            alt="404-not-found-logo"
            className="page404-logo"
          />
          <h1 className="page404-title">ooops, pagina nu există!</h1>
          <Link to="/homepage" className="page404-btn">inapoi spre pagina principală</Link>
        </div>
        <img
            className="page404-svg"
            src={Referee}
            alt="referee-holding-a-red-card"
          />
      </div>
      </Layout>
    </>
  );
};

export default Page404;

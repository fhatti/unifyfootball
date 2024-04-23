import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";

import Table from "../../components/Table/Table";
import newsData from "../../data/newsData";
import Fixture from "../../components/Fixture/Fixture";
import Layout from "../../components/Layout/Layout";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";


const Homepage = () => {
  const [newsCard, setNewsCard] = useState(newsData);
  const newsDataRendered = newsCard.slice(0, 3).map((newsData) => (
    <div key={newsData.id} className="news-container-homepage">
      <div className="news-home-img">
        <img src={newsData.imageUrl} className="news-home--img" />
      </div>
      <div className="news-home-details">
        <h2 className="news-home-title">{newsData.title}</h2>
        <p className="news-home-subtitle">{newsData.subtitle}</p>
        <p className="card-date">{newsData.date}</p>
        <div className="news-home-link">
          <Link
            className="news-card-link"
            to={{
              pathname: `/news/${newsData.id}`,
            }}
          >
            vezi toată știrea
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="homepage">
      <Layout>
      <div className="header-container-homepage">
        <h1 className="header-title-homepage ">BY THE FANS.</h1>
        <p className="header-subtitle-homepage">FOR THE FANS.</p>
      </div>
      <div className="homepage-main">
        <div className="homepage-container homepage-item">
          <div className="services-container">
            <h2 className="services-container-header">Clasament</h2>
            <div className="services-container-child">
              <Table numberOfTeamsToShow={10} />
              <Link className="news-card-link" to="/standings">
                vezi tot clasamentul
              </Link>
              <h3 className="services-container-header lft">Următorul meci</h3>
              <div className="services-container-fixture">
                <Fixture numberOfFixturesToShow={1} />
              </div>
            </div>
          </div>
          <div className="services-container">
            <h2 className="services-container-header">Ultimele știri</h2>
            {newsDataRendered}
          </div>
        </div>
        <div className="homepage-container"></div>
        <div className="homepage-container"></div>
        <div className="homepage-container"></div>
        <div className="homepage-container newsletter">
          <img style={{position:"relative", top:"10px", margin:"30px"}} width={"300px"} height={"100px"} src="data:image/png;base64,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"/>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default Homepage;

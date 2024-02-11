import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";

import Table from "../../components/Table/Table";
import newsData from "../../data/newsData";
import Fixture from "../../components/Fixture/Fixture";
import Layout from "../../components/Layout/Layout";


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
        <div className="homepage-container newsletter"></div>
      </div>
      </Layout>
    </div>
  );
};

export default Homepage;

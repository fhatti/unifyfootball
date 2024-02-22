import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./News.css";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import newsData from "../../data/newsData";
import Layout from "../../components/Layout/Layout";
import headerImg from "../../assets/news-page-header.avif"

const News = () => {
  const headerProps = {
    title: "ȘTIRI",
    imageUrl:[headerImg],
    subtitle: "",
    lowercase: true,
    shadow: true,
  };

  const [newsCard, setNewsCard] = useState(newsData);
  const newsDataRendered = newsCard.map((newsData) => (
    <Card
      key={newsData.id}
      img={newsData.imageUrl}
      type={newsData.type}
      title={newsData.title}
      subtitle={newsData.subtitle}
      date={newsData.date}
      league={newsData.league}
      id={newsData.id}
    />
  ));

  return (
    <div>
      <Header {...headerProps} />
      <Layout>
        <section className="main">
          <div className="main-container">
            <div className="main-txt">
              <p className="txt">
                Află și tu care sunt ultimele noutăți din fotbal chiar din
                știrile noastre!{" "}
              </p>
              <p className="txt">
                <span className="unify">UnifyFootball </span>îți aduce cele mai
                proaspete informații despre lumea fascinantă a fotbalului.
              </p>
              <p className="txt">
                Fii la curent cu cele mai recente transferuri, rezultatele
                meciurilor în direct, analizele specialiștilor și momentele
                captivante din universul fotbalistic.{" "}
              </p>
            </div>
            <FaArrowDown className="down-arrow bounce center" />
          </div>
          <motion.div className="news-container">{newsDataRendered}</motion.div>
        </section>
      </Layout>
    </div>
  );
};

export default News;

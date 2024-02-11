import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./News.css";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import newsData from "../../data/newsData";
import FullNewsPage from "../../components/FullNews/FullNewsPage";
import Layout from "../../components/Layout/Layout";

const News = () => {
  const headerProps = {
    title: "ȘTIRI",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/868e/01c3/58ed173bec8c7fb85cd75f8a64dec0b2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gs2QnIIHTo9od2AqvWAUc1FhpIm-kelC9J9ORn3t9Uns52EdK0q5oG00P1RxuEKj6nOVsGDgFYMO9MEoJvu2gluWwYG0NOVylSBvei~Rw~LRD8Szdj3zUZn41huPOvlcCyyDPK9J1zFLc8txiC282kZDZ~Kze4GQn9ZnKjBxwYRgqdnDCZ1O2tK4aJvv2acfzpJ3dh2euAQzFeB6BBlueMrR5HcHEmthnXHj-Y3tXkyMLJ~tYsHVCt0W2nBUB6KsBOHgHBg8uqNW3TXJ9nJdguM3wD8WVjey87Q0pBEVtc7Mt-hzZ1hmkBcsf3XVW1AMcMWYJyS7SoJgWS82c9QoOA__",
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

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./FullNewsPage.css";
import newsData from "../../data/newsData";
import Header from "../Header/Header";
import useScript from "../../hooks/useScript";
import headerImg from "../../assets/test6.png";

const FullNewsPage = () => {
  useScript(
    "https://platform-api.sharethis.com/js/sharethis.js#property=65ac3286fbfe1600199c5d0d&product=inline-share-buttons&source=platform"
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullNews, setFullNews] = useState("");

  useEffect(() => {
    const foundNews = newsData.find((news) => String(news.id) === id);

    if (foundNews) {
      setFullNews(foundNews);
    } else {
      navigate("/news");
    }
  }, [id, navigate]);

  if (!fullNews) {
    return null;
  }

  const headerProps = {
    title: "ȘTIRI",
    imageUrl: [headerImg],
    subtitle: "",
    lowercase: true,
    shadow: false,
  };

  return (
    <div>
      <Header {...headerProps} />
      <p className="news--type">{fullNews.type}</p>
      <section className="news--main">
        <div className="news--header">
          <h1 className="news--title">{fullNews.title}</h1>
          <p className="news--date ">
            Publicat la {fullNews.date} -{" "}
            <span className="bold reading-time">{fullNews.readingTime}</span>
          </p>
          <p className="news--text">{fullNews.subtitle}</p>
        </div>
        <div className="news--body">
          <h2 className="news--second--title">{fullNews.secondTitle}</h2>
          <p className="news--text">{fullNews.text1}</p>
          <p className="news--text">{fullNews.text2}</p>
          <img
            src={fullNews.imageUrl}
            alt={fullNews.imageAlt}
            className="news--img"
          />
          <p className="news--text">{fullNews.text3}</p>
        </div>
        <div className="news--share">
          <p className="news--share-text">
            Dacă ți-a plăcut sau ți s-a părut utilă știrea noastră, dă un share
            prietenilor!
          </p>
          <div className="news--share-links">
            <div class="sharethis-inline-share-buttons social-btn"></div>
            <Link to="/news" className="news--btn">
              vezi și alte știri
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullNewsPage;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";
import "./Card.css";
export const Card = (props) => {
  const controls = useAnimation();
  const maxSubtitleLength = 65;
  const truncatedSubtitle =
    props.subtitle.length > maxSubtitleLength
      ? props.subtitle.slice(0, maxSubtitleLength) + "..."
      : props.subtitle;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.1;

      if (scrollPosition > triggerPosition) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -20 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className="card"
      style={{ opacity: 0, x: -20 }}
      animate={controls}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <img src={props.img} className="card-image" alt={props.imageAlt} />
      <div className="card-description-tags">
        {props.type !== "" && (
          <p className="card-description-info">{props.type}</p>
        )}
        {props.league !== "" && (
          <span className="card-league">{props.league}</span>
        )}
      </div>
      <div className="card-description">
        <p className="card-description-header">{props.title}</p>
        <p className="card-description-subtitle">{truncatedSubtitle}</p>
        <p className="card-date">{props.date}</p>
      </div>
      <div className="card-info">
        <Link
          className="card-link"
          to={{
            pathname: `/news/${props.id}`,
          }}
        >
          vezi mai mult
        </Link>
      </div>
    </motion.div>
  );
};

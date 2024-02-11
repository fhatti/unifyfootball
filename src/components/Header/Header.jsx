import React from "react";
import "./Header.css";
const Header = ({
  title,
  imageUrl,
  logo,
  altLogo,
  lowercase,
  shadow,
  fullHeight,
}) => {
  const titleStyle = lowercase
    ? { textTransform: "" }
    : { textTransform: "uppercase" };
  const imgStyle = shadow ? { filter: "brightness(0.7)" } : { filter: "" };
  const fullPage = fullHeight ? { height: "100vh" } : {};
  return (
    <div className="header-container">
      <img
        src={imageUrl}
        alt="Header Image"
        style={imgStyle}
        className="header-img"
      />
      <h1 style={titleStyle} className="header-title overlay ">
        {title}
      </h1>
    </div>
  );
};

export default Header;

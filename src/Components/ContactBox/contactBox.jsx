import React, { useState } from "react";
import "./contactbox.css";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ContactBox = (props) => {
  const [iconColor, setIconColor] = useState("white");

  const handleMouseEnter = () => {
    setIconColor("black");
  };

  const handleMouseLeave = () => {
    setIconColor("white");
  };

  return (
    <Link
      className="app__contactbox-box"
      to={
        props.github
          ? "https://github.com/Vaibhavk0192"
          : props.LinkedIn
          ? "https://www.linkedin.com/in/vaibhavkapoor0192/"
          : "mailto:kapoorkrishna00@gmail.com"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="app__contactbox-img">
        {props.github ? (
          <TbBrandGithubFilled
            color={iconColor}
            className="app__contactbox-img"
          />
        ) : props.email ? (
          <MdEmail color={iconColor} className="app__contactbox-img" />
        ) : (
          <FaLinkedinIn color={iconColor} className="app__contactbox-img" />
        )}
      </div>
      <div className="app__contactbox-title">{props.content}</div>
    </Link>
  );
};

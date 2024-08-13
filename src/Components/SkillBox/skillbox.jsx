import React from "react";
import "./skillbox.css";


const Skillbox = (props) => {
  const text = props.title;
  return (
    <div className="app__skilbox">
      <img src={props.img} alt="html_logo" />
      <p>{text}</p>
    </div>
  );
};

export default Skillbox;

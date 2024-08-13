import React from "react";
import "./socialMedia.css";
import { ContactBox } from "../ContactBox/contactBox";
import { CgScrollV } from "react-icons/cg";

export const SocialMedia = () => {
  const leftBracket = "<";
  const rightBracket = ">";
  return (
    <div className="app__socialmedia-wrapper">
      <div style={{  }}>
        <CgScrollV className="app__socialmedia-icon" size={40} />
      </div>
      <div>
        <br></br>
      </div>
    </div>
  );
};

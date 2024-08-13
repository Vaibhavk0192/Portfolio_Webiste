import React from "react";

import "./project.css";
import { Link, redirect } from "react-router-dom";

const ProjectTag = (props) => {
  return (
    <div className="app__project-tag" style={{ textDecoration: "none" }}>
      <p className="app__project-tagText">{props.tag}</p>
    </div>
  );
};

export const Project = (props) => {
  return (
    <div className="app__project-box">
      <div className="app__project-image">
        <Link to={props.link} style={{ textDecoration: "none" }}>
          <img src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className="app__project-title">{props.title}</div>
      <div className="app__project-description">
        <p>{props.text}</p>
      </div>
      <div className="app__project-tagBox">
        {props.tags.map((tag) => (
          <ProjectTag tag={tag} />
        ))}
      </div>
    </div>
  );
};

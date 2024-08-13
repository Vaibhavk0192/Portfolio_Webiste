import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import AboutUsImage from "../../assets/images/front-view-notebook-cup-coffee-inspiration-mock-up-concept 1.png";
import "./home.css";
import Skillbox from "../../Components/SkillBox/skillbox";
import { Skill, Projects } from "../../data/data.js";
import { Project } from "../../Components/Project/project.jsx";
import Recipath from "../../assets/images/recipath.png";
import { Contact } from "../../Components/Contact/contact.jsx";
import { SocialMedia } from "../../Components/SocialMedia/socialMedia.jsx";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import BackToTop from "../../Components/BackToTop/BackToTop.jsx";

const Home = () => {
  const el = useRef(null);
  const about = '<"About_me">';
  const skill = '<"Skills">';
  const projects = '<"Projects">';
  const skillIcons = "{/}";
  const ProjectsIcons = "{*}";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      startDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  `;

  const DownloadButton = styled.a`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 14rem;
    height: 3rem;
    margin-top: 0.6rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 600;
    color: #202021;
    background-color: #fada9d;
    border-radius: 10px;
    text-decoration: none;
    animation: ${bounce} 2s infinite;
    transition: ease-in 0.2s;
    &:hover {
      background-color: #fada9d;
      animation: none;
    }
  `;

  return (
    <div>
      <div className="app__home" id="home">
        <div className="app__home-subheading ">
          // Hi, I m{" "}
          <span style={{ color: "#9A99FF" }} className="">
            Vaibhav
          </span>
          , a
        </div>
        <div className="app__home-heading">
          <p>{'{"'}</p>
          <span ref={el} className="app__home-name_type" />
          <p>{'"}'}</p>
        </div>
        <DownloadButton
          href="https://drive.google.com/file/d/1sBA-MKszUDvut1yp8LnoPVaReFZKSw-4/view?usp=sharing"
          download="Vaibhav_Resume.pdf"
          target="_blank"
        >
          <TbSquareRoundedArrowDownFilled />
          {"_Resume"}
        </DownloadButton>
        <BackToTop /> {/* Add the BackToTop component */}
      </div>
      <div className="app__home-about_us-box">
        <img src={AboutUsImage} alt="about_us-image" />
        <div className="app__home-about_us-content_box">
          <h1 className="app__home-about_us-heading">{about}</h1>
          <p className="app__home-about_us-content">
            I am a hardworking and dedicated individual with a passion for
            learning and an eagerness to gain practical experience in the field.
            I have a strong sense of responsibility and a positive attitude, and
            I believe that these qualities, combined with my technical skills,
            make me a valuable addition to any team. I am committed to
            continuous learning and growth and am looking for opportunities to
            gain practical experience in the industry while contributing to the
            success of the organization.........
          </p>
        </div>
      </div>
      <div className="app__home-skills-box" id="skills">
        <p className="app__logo">{skillIcons}</p>
        <p className="app__heading">{skill}</p>
        <p className="app__subheading">
          ....Skills are the building blocks of progress and the keys to
          continuous growth.
        </p>
        <div className="app__home-skils-row">
          {Skill.map((skill) => (
            <Skillbox key={skill.key} title={skill.title} img={skill.img} />
          ))}
        </div>
      </div>
      <div id="projects">
        <p className="app__logo">{ProjectsIcons}</p>
        <p className="app__heading">{projects}</p>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
          <p className="app__subheading">
            .....Dreams Turned Reality: A Collection of Transformative and
            Inspiring Projects.
          </p>
        </div>
      </div>
      <div className="app__home-project-box">
        {Projects.map((project) => (
          <Project
            key={project.key}
            title={project.title}
            text={project.text}
            image={project.image}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
      <div id="contact" style={{ width: "100vw" }}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;

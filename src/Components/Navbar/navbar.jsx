import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="app__navbar-topbox">
        <p>portfolio - Vaibhav Kapoor</p>
      </div>
      <div className="app__navabr-rest">
        <div className="app__navbar-count">
          <p>
            1<br />2<br /> 3<br /> 4<br /> 5 <br />6 <br />7 <br />8 <br />9
            <br /> 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
            30 31 32 33 34 35 36 37 38 39 40 41 42 43 44
          </p>
        </div>
        <div className="app__navbar-main  app__box ">
          <div className="app__navbar-name">
            <div className="app__navbar-name_heading">"// Vaibhav"</div>
            <div className="app__navbar-name_subeading">Developer</div>
          </div>
          <div className="app__navbar-headings_box">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="non-active-class"
                  activeClass="active-class"
                >
                  _Home
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="non-active-class"
                  activeClass="active-class"
                >
                  _skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="non-active-class"
                  activeClass="active-class"
                >
                  _projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="non-active-class"
                  activeClass="active-class"
                >
                  _contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

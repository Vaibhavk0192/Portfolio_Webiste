import React from "react";
import { Form } from "react-router-dom";
import LinkedIn from "../../assets/images/in.png";
import GitHub from "../../assets/images/git.png";
import Instagram from "../../assets/images/insta.png";
import "./contact.css";
import { ContactBox } from "../ContactBox/contactBox";
export const Contact = () => {
  const ContactTitle = "< Contact_me >";
  const ContactIcon = "{*}";
  const SendText = "{ Send }";
  return (
    <div class="contactMe_mainbox">
      <div class="contactMe_info">
        <div class="app__logo" style={{ marginBottom: "4rem" }}>
          {ContactIcon}
        </div>
        <div class="app__heading" style={{ marginBottom: "4rem" }}>
          {ContactTitle}
        </div>
        <div class="app__subheading">
          ....Let's Connect and Collaborate: Reach Out to Start Something
          Extraordinary
        </div>
      </div>

      <div className="app_contact-contactbox_wrapper">
        <ContactBox github={true} content={"Vaibhavk0192"}/>
        <ContactBox email={true} content={"kapoorkrishna00@gmail.com"} />
        <ContactBox LinkedIn={true} content={"Vaibhav Kapoor"}/>
      </div>

      <div className="app__contact-footer scale-up-center">
        <div class="socials_icons">
        © 2024 Vaibhav Kapoor. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

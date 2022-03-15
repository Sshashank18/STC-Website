import React, { useState, useMemo } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";
import "../static/css/Footer.css";

const Footer = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_suw0hhv",
        "template_8o16jf4",
        e.target,
        "Rg4OXHov1rGaCcYvN"
      )
      .then((res) => {
        alert("Your message has sent");
      })
      .catch((err) => alert(err));
  }
  return (
    <div className="footer" style={{ color: "white" }}>
      <h1>Let's talk business</h1>
      <p className="hide-mob">
        Just fill in the form and we'll schedule a call with you
      </p>
      <p className="hide-desk">
        Just fill in the form and <br /> we'll schedule a call with you
      </p>
      <div className="all-input-val">
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Type in your Name" required/>
          <input
            type="text"
            name="message"
            placeholder="What are we talking about"
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Put in your contact"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />{" "}
          <br />
          <input
            type="text"
            name="user_email"
            placeholder='Type in your Email and let"s get started'
            id="email-field"
            required
          />
          <button>
            <FaPaperPlane id="plane-icon" />
          </button>
        </form>
      </div>
      <p id="copyright-desk">
        Copyright 2020 &#169; All rights Reserved.Seventh Triangle Consulting
        Private Limited
      </p>
      <p id="copyright-mob">
        Copyright 2020 &#169; All rights Reserved. <br /> Seventh Triangle
        Consulting Private Limited
      </p>
    </div>
  );
};

export default Footer;

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

    // emailjs
    //   .sendForm(
    //     "service_suw0hhv",
    //     "template_8o16jf4",
    //     e.target,
    //     "Rg4OXHov1rGaCcYvN"
    //   )
    //   .then((res) => {
    //     alert("Your message has sent");
    //   })
    //   .catch((err) => alert(err));





  }

  return (
    <div className="footer" id="footer" style={{ color: "white" }}>
      <h1>Firm Client Rendezvous   </h1>
      <p className="hide-mob">
        Contact our esteemed experts for strategizing, marketing, data solutions<br/> or any other requirement for your brand
      </p>
      <p className="hide-desk">
      Contact our esteemed experts for strategizing, marketing, data solutions<br/> or any other requirement for your brand
      </p>
      <div className="all-input-val">
        <form action="https://formsubmit.co/hello@seventhtriangle.com" method="POST">
          <input type="text" name="name" placeholder="Type in your Name" required/>
          <input
            type="text"
            name="message"
            placeholder="What are we talking about"
            required
          />
          <Select options={options} value={value} onChange={changeHandler} />
          <input
            type="tel"
            name="contact"
            placeholder="Put in your contact"
            required
          />{" "} 
           {/* <PhoneInput
            placeholder="Enter phone number"
            value={value}
            country='IN'
            onChange={setValue}/> */}
         
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
        Copyright 2022 &#169; All rights Reserved.Seventh Triangle Consulting
        Private Limited
      </p>
      <p id="copyright-mob">
        Copyright 2022 &#169; All rights Reserved. <br /> Seventh Triangle
        Consulting Private Limited
      </p>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../static/img/group37.png";
import menu from "../static/img/5.png";
import cross from "../static/img/yy.png";
import line from "../static/img/Path20.png";
import arrow from "../static/img/group17.png";
import path from "../static/img/Path54.png";
import text from "../static/img/Group18.png";
import path2 from "../static/img/Path46.png";
import call from "../static/img/call.png";
import twitter from "../static/img/twitter.png";
import facebook from "../static/img/facebook.png";
import location from "../static/img/location.png";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />{" "}
        </a>
        <button className="button-class menu-btn" onClick={toggleMenu} >
          {visible? 
          <div className="menu-button-trans">
            <p><ImCross/>&nbsp;&nbsp; MENU</p>
          </div>
           : 
            <div>
              <img src={menu} alt="" />
            </div>
          }
        </button>
      </nav>
      {visible ? (
        <div className="over-shadow">
          <div className="second-container">
            <div class="vr"></div>
            <div class="row" style={{ marginRight: "0px" }}>
              <div class="col-3 first-col">
                <img src={text} alt="" id="text-img" />
              </div>
              <div class="col sec-col">
                <img src={path2} alt="" id="img-2" onClick={toggleMenu} />
                <p style={{ marginTop: "140px", marginRight: "30px" }}>
                  <NavLink id="para1" to="/anyqueries">
                    Big questions <br /> on your mind?
                  </NavLink>
                </p>
                <p>
                  <NavLink id="para2" to="/reviews">
                    We are not shy, <br /> Stalk Us!
                  </NavLink>
                </p>
              </div>
            </div>
            <div class="row" style={{ marginRight: "0px" }}>
              <div class="col-3 column-1">
                <p>Reach Us</p>
              </div>
              <div className="col column-2">
                <p>
                  <IoMdCall />
                </p>
                <div className="overlay">
                  <img src={call} alt="" className="text1" />
                </div>
              </div>
              <div
                className="col column-3"
              >
                <p>
                  <MdLocationOn />
                </p>
                <div className="overlay1">
                <img src={location} alt="" className="text2" />
                </div>
              </div>
              <div
                className= "col column-4"
              >
                <p>
                  <FaFacebookF />
                </p>
                <div className="overlay2">
                <img src={facebook} alt=""  className="text3"/>
                </div>
              </div>
              <div
                className="col column-5"
              >
                <p>
                  <BsTwitter />
                </p>
                <div className="overlay3">
                <img src={twitter} alt=""  className="text4" />
                </div>
              </div>
            </div>
          </div>
          <div className="for-mob">
            <div className="forText">
              <h3>
                <NavLink to="/anyqueries">
                  Big questions <br /> on your mind?
                </NavLink>
              </h3>
              <p>
                <NavLink to="/reviews">
                  We are not shy, <br /> Stalk Us!
                </NavLink>
              </p>
            </div>
            <img src={path2} alt="" id="img-3" />
            <img src={text} alt="" id="text-img-2" />
            <p id="reach-para" style={{ fontSize: "25px" }}>
              Reach Us
            </p>
          </div>
          <div class="row mob-con" style={{ marginRight: "0px" }}>
            <div class="col">
              <p>
                <IoMdCall />
              </p>
            </div>
            <div class="col">
              <p>
                <MdLocationOn />
              </p>
            </div>
            <div class="col">
              <p>
                <FaFacebookF />
              </p>
            </div>
            <div class="col">
              <p>
                <BsTwitter />
              </p>
            </div>
          </div>
        </div>): (
        <div className="body">
          <h1>
            Big questions <br /> on your mind?
          </h1>
          <p>How we're tracking some of the most complex global challenges.</p>
          <div className="right-side-menu">
            <a href="">Seventh triangle consulting</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

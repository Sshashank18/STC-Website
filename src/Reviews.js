import React, { useState } from "react";
import "./static/css/Reviews.css";
import { NavLink } from "react-router-dom";
import Logo from "./static/img/group37.png";
import menu from "./static/img/maskGroup12.png";
import profile from "./static/img/profile.jpeg";
import path2 from "./static/img/Path63.svg";
import path1 from "./static/img/Path62.svg";
import Head from "./components/Head";

const Reviews = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const toggleHover2 = () => setHovered2(!hovered2);
  const toggleHover3 = () => setHovered3(!hovered3);
  return (
    <>
    <Head/>
      <div className="wrapperSection">
        <div className="img-box">
          <div className="info">
            <div
              className={hovered ? "onhover" : "ofhover"}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              <img src={profile} alt="" />
              <p id="read">Read more</p>
              <p id="day">
              Prashant, leads the business and strategy, alongside leading client relationships at Seventh Triangle. He has been valiant in firmly establishing STC as an upcoming leading technology and marketing firm. 
              His formidable work ethic and unwavering efforts to deliver excellent storming results are the reason why biggest emerging startups, including KEVENTERS, ITOKRI, and BOMBAY SHAVING COMPANY, to name a few, are eager to collaborate with him. 
              <br/><br/>
              He's unquestionably one of the sharpest tools in the shed!
              <br/><br/>
              He was a cofounder of Sukkhi, India's largest fashion jewelry brand. He previously served as Sukkhi's Chief Business Officer and oversaw the D2C vertical.

              </p>
            </div>
            <h3>Prashant Gupta</h3>
            <p id="quote">
            Founder,STC
            </p>
          </div>
        </div>
        <div className="another-img-box">
          <div className="info2">
            <div
              className={hovered2 ? "onhover" : "ofhover"}
              onMouseEnter={toggleHover2}
              onMouseLeave={toggleHover2}
            >
              <img src={profile} alt="" />
              <p id="read">Read more</p>
              <p id="day">
              Sushant is one of the estimable founders of Seventh Triangle. He sagaciously leads overall technology, new tech initiatives and Business Intelligence at STC. 
              He also strings together Marketing with Technology to achieve the goal of being a Mar-tech integrated agency and oversees solution building at various levels.
              Essentially solving a business problem using technology, marketing and BI, Sushant proves to be a maverick in his field.
              He has been a founder and promoter of multiple ecommerce startups himself and has been associated with xyz brands in the past. 
              <br/><br/>
              In his most recent position, he was a Co-Founder of a VC-funded leading fashion jewelry brand in India. 
              For nearly a decade, he has been assisting clients in understanding their brand positioning and scaling up their business in a ROI-efficient manner.

              </p>
            </div>
            <h3>Sushant Gupta</h3>
            <p id="quote">
            Co-Founder, STC
            </p>
          </div>
        </div>
        <div className="another-img-box2">
          <div className="info3">
            <div
              className={hovered3 ? "onhover" : "ofhover"}
              onMouseEnter={toggleHover3}
              onMouseLeave={toggleHover3}
            >
              <img src={profile} alt="" />
              <p id="read">Read more</p>
              <p id="day">
              Shravan is leading the product department at STC, and his valiant efforts have propelled the company to new heights.
              He is in charge of the overall technology wing's growth trajectory, as well as new businesses and partners for STC, while spearheading the technology projects. 
              <br/><br/>
              He soon discovered his interest and field of expertise was Product Generation while identifying, planning, and executing various marketing activities. 
              His quest to understand why the product is desired, as well as how the market and consumers would react to it, resulted in the creation of Tartl, India's first multilingual content collaboration platform. 
              It led overall marketing and business activities for the firms, brand associations & event management. Thereafter, he worked with Marmeto, as sales and accounts manager. 

              </p>
            </div>
            <h3>Shravan Kumar</h3>
            <p id="quote">
            Founding Member and <br/>Head of the Projects
            </p>
          </div>
        </div>
      </div>

      {/* Grid section starts here */}
      <div className="grid-section">
        <h1>
          Lorem ipsum dolor <br /> sit amet consectetur.
        </h1>
        <div className="container">
          <div className="row gx-5" style={{ marginRight: "0px" }}>
            <div className="col-sm-6 col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card hide">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="col-6 card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card hide">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card hide">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card hide">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div class="card hide">
                <img
                  class="card-img-top"
                  id="profile"
                  src={profile}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Grid section ends here */}

      {/* Running text section starts here */}

      <div className="running-text">
        <div class="marquee">
          <p>
            EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
          <p>
             EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
        </div>
        <div class="marquee">
          <p>
            EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
          <p>
             EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
        </div>
        <div class="marquee">
          <p>
            EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
          <p>
             EQUAL OPPOTUNITY | HONEST | TRANSPARENT | WELCOMING WORKSPACE |
            EQUAL OPPOTUNITY | EQUAL OPPOTUNITY | HONEST | TRANSPARENT |
            WELCOMING WORKSPACE |
          </p>
        </div>
      </div>
      {/* Running text section ends here */}

      <div className="part-section">
        <h1>
          Become a part <br /> something big{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptas architecto in. Amet ea maiores deserunt aut. Maiores officia
          eum eligendi eius quisquam perspiciatis quo dolorem quidem deleniti
          nulla, sint cupiditate error saepe, eos libero aliquid illum
          molestias. Voluptas, incidunt! Consequuntur laboriosam id nihil
          aperiam blanditiis mollitia quibusdam doloremque cumque?
        </p>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
        <img src={path1} alt=""  id="path1"/>
        <img src={path2} alt="" id="path2" />
      </div>
    </>
  );
};

export default Reviews;

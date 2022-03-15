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
  const toggleHover = () => setHovered(!hovered);
  const toggleHover2 = () => setHovered2(!hovered2);
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ab asperiores eveniet, reprehenderit atque
                voluptatibus, quae vitae sunt laboriosam quibusdam quis aliquam
                quisquam enim et? Eos sed dolores excepturi, quidem sapiente
                esse harum et
              </p>
            </div>
            <h3>Shushant Gupta</h3>
            <p id="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi iste, quae accusamus ullam unde quis assumenda
            </p>
            <p id="quoteName">Some Guy</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ab asperiores eveniet, reprehenderit atque
                voluptatibus, quae vitae sunt laboriosam quibusdam quis aliquam
                quisquam enim et? Eos sed dolores excepturi, quidem sapiente
                esse harum et
              </p>
            </div>
            <h3>Shushant Gupta</h3>
            <p id="quote">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi iste, quae accusamus ullam unde quis assumenda
            </p>
            <p id="quoteName">Some Guy</p>
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

import React, { useState } from "react";
import "./static/css/Home.css";
import herbs from "./static/img/herbs.png";
import bean from "./static/img/image12.png";
import organic from "./static/img/image11.png";
import rabbit from "./static/img/image13.png";
import safe from "./static/img/safe.png";
import label from "./static/img/image6.png";
import orange from "./static/img/image16.png";
import since from "./static/img/image10.png";
import xy from "./static/img/image4.png";
import forest from "./static/img/forest3.png";
import woovly from "./static/img/image9.png";
import ampm from "./static/img/image8.png";
import jodi from "./static/img/image5.png";
import lambre from "./static/img/image15.png";
import bello from "./static/img/image7.png";
import better from "./static/img/image14.png";
import leaner from "./static/img/maskGroup5.png";
import faster from "./static/img/maskGroup6.png";
import bigger from "./static/img/maskGroup7.png";
import bttr from "./static/img/maskGroup8.png";
import shopify from "./static/img/maskGroup3.png";
import meta from "./static/img/untitledDesign7.png";
import google from "./static/img/googlePartner.png";
import klaviyo from "./static/img/klaviyologo.png";
import clever from "./static/img/ctLogo.png";
import omnisend from "./static/img/download.png";
import uni from "./static/img/uni.png";
import net from "./static/img/netcore.png";
import Offer from "./Offer";
import Navbar from "./components/Navbar";
// import path4 from "./static/img/Path23.png";
import path4 from "./static/img/longcurve.png";
import one from "./static/img/1.png";
import two from "./static/img/2.png";
import three from "./static/img/3.png";
import four from "./static/img/4.png";
// import path5 from './static/img/Path24.png';
import path5 from './static/img/curve.png'
import { Learner } from "./Learner";


const Home = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const toggleHover = () => setVisible(!visible);
  const toggleHover2 = () => setVisible2(!visible2);
  const toggleHover3 = () => setVisible3(!visible3);
  const toggleHover4 = () => setVisible4(!visible4);

  return (
    <div>
      <Navbar/>
      {/* <Navbar1/> */}
      <div className="headline">
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>
        <h1>
          Seventh Triangle is a team of experts  who live and breathe the
          e-commerce ecosystem.Being radically honest and growth-oriented is
          what makes us who we are.
        </h1>
        <p>Seventh Triangle is a team of  experts</p>
        <p>who live and breathe the e-commerce ecosystem.</p>
        <p>Being radically honest and growth-oriented</p>
        <p>is what makes us who we are</p>
      </div>
      {/* Our partners section starts here */}
      <div className="another-div">
        <h2>Our Partners</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          velit consectetur incidunt, quam, error odit, eum totam odio voluptas
          laudantium nemo unde corrupti provident commodi possimus enim. Facere,
          excepturi, quaerat ipsam quasi nihil autem eum error accusamus quidem
          beatae tenetur doloremque assumenda nemo modi est voluptates quod
          debitis. Optio tempora doloribus consequatur repellendus ab expedita
          quo, eveniet obcaecati nihil nostrum?
        </p>
      </div>
      <div class="row-layout">
        <div class="column-layout first-column">
          <div className="all-img">
            <img src={herbs} alt="" id="image-1" />
            <img src={bean} alt="" id="image-2" />
            <img src={organic} alt="" id="image-3" />
            <img src={rabbit} alt="" id="image-4" />
            <img src={safe} alt="" id="image-5" />
            <img src={label} alt="" id="image-6" />
            <img src={orange} alt="" id="image-7" />
            <img src={since} alt="" id="image-8" />
            <img src={xy} alt="" id="image-9" />
            <img src={forest} alt="forest" id="image-10" />
            <img src={woovly} alt="" id="image-11" />
            <img src={ampm} alt="" id="image-12" />
            <img src={jodi} alt="" id="image-13" />
            <img src={lambre} alt="" id="image-14" />
            <img src={bello} alt="" id="image-15" />
            <img src={better} alt="" id="image-16" />
          </div>
        </div>
        <div class="column-layout second-column">
          <h2>Our Partners</h2>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              architecto. Aut non quaerat, corrupti laborum adipisci doloremque.
              Libero sit, placeat recusandae exercitationem a dignissimos quo
              aspernatur iure molestiae praesentium vel sequi soluta amet autem
              esse iusto? Dolor non optio perspiciatis, praesentium numquam
              officiis eligendi fuga eos hic ex. Ducimus, dolorem! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!
            </p>
          </div>
        </div>
      </div>

      {/* Our partners section ends here */}

      {/* Offer section starts here */}
      <Offer />
      {/* Offer section ends here */}

      {/* Ecosystem section starts here */}
      <div className="eco-section">
        <div class="eco-row">
          <div class="eco-column-1">
            <h2>Our Ecosystem</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              quia? Dignissimos repudiandae magnam facere ipsam corrupti tenetur
              quam est suscipit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nostrum iste quis quam nemo ullam aspernatur doloribus numquam
              voluptatibus facere, dolorum debitis repudiandae maxime
              perspiciatis necessitatibus culpa! Rem, mollitia velit.
            </p>
          </div>
          <div class="eco-column-2">
            <div className="all-img">
              <img src={shopify} alt="" id="image-1" />
              <img src={meta} alt="" id="image-2" />
              <img src={google} alt="" id="image-3" />
              <img src={klaviyo} alt="" id="image-4" />
              <img src={clever} alt="" id="image-5" />
              <img src={omnisend} alt="" id="image-6" />
              <img src={uni} alt="" id="image-7" />
              <img src={net} alt="" id="image-8" />
              <img src={klaviyo} alt="" id="image-9" />
              <img src={google} alt="forest" id="image-10" />
              <img src={meta} alt="" id="image-11" />
              <img src={shopify} alt="" id="image-12" />
              <img src={net} alt="" id="image-13" />
              <img src={uni} alt="" id="image-14" />
              <img src={omnisend} alt="" id="image-15" />
              <img src={clever} alt="" id="image-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem section ends here */}

      {/* Learner|Faster| bigger| better section starts here */}
      <div className="strive-section">
        <h3>We strive to get you</h3>
        
        <div className="learner-sec-mob">
          <img src={leaner} alt="" />
          <p>Keeping things lean, mean and getting seen</p>
          <img src={faster} alt="" />
          <p>We are enablers, builders strategizers and partners</p>
          <img src={bigger} alt="" />
          <p>We are what we are because you are who you are.</p>
          <img src={bttr} alt="" />
          <p>All Plans need execution, we focus on getting things done</p>
        </div>
        <Learner/>
      </div>
      {/* Learner|Faster| bigger| better section ends here */}
      <img src={path4} alt="" id="path4" />
      <img src={path5} alt="" id="path5" />
    </div>
  );
};

export default Home;

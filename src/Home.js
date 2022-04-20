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
import Questions from "./Questions";
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
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [questionHead, setQuestionHead] = useState('Performance');
  const toggleHover = () => setVisible(!visible);
  const toggleHover2 = () => setVisible2(!visible2);
  const toggleHover3 = () => setVisible3(!visible3);
  const toggleHover4 = () => setVisible4(!visible4);

  const toggleHover5 = (name) => {
    setQuestionHead(name)
    if(name=='Performance') {setActive(true);  setActive2(false); setActive3(false); setActive4(false);}                          
    else if(name=='E-commerce') {setActive2(true); setActive(false); setActive3(false); setActive4(false);}                        
    else if(name=='Data') {setActive3(true);  setActive2(false); setActive4(false); setActive(false);}                            
    else {setActive4(!active4);  setActive(true); setActive2(false); setActive3(false); }                       
  };

  return (
    <div>
      <Navbar/>
      {/* <Navbar1/> */}
      <div className="headline">
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>
        <h1>
        Seventh Triangle is a marketing and technology-integrated agency.
        We primarily assist brands in the Direct to Consumer space in reaching scale and efficiency.
        We assist small and medium-sized businesses in scaling their operations by consulting, assisting, guiding, supporting, and mentoring them.
        </h1>
        <p>Seventh Triangle is an eCommerce-focused Growth Hacking firm</p>
        <p>with a track record of creating exceptional businesses in the</p>
        <p>D2C space. The company works with nascent businesses, with</p>
        <p>potential to transition from being a seller to a brand.</p>
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
            <img src={forest} style={{background:'black'}} alt="forest" id="image-10" />
            <img src={woovly} alt="" id="image-11" />
            <img src={ampm} alt="" id="image-12" />
            <img src={jodi} alt="" id="image-13" />
            <img src={lambre} alt="" id="image-14" />
            <img src={bello} alt="" id="image-15" />
            <img src={better} alt="" id="image-16" />
          </div>
        </div>
        <div class="column-layout second-column" id="partners">
          <h2>Our Partners</h2>
          <div className="para">
            <p>
              We work with our partners to create
              an ecosystem which helps in building
              brands in the D2C space. Our experts
              stratergize, creatively design, and 
              provide solutions which helps in scaling
              businesses. Building a brand together
              as a value and build establishments,
              that we practise with our partners.
            </p>
          </div>
        </div>
      </div>

      {/* Our partners section ends here */}

      {/* Offer section starts here */}
      <Offer />
      {/* Offer section ends here */}

      {/* Ecosystem section starts here */}
      <div className="eco-section" id ="ecosystem">
        <div class="eco-row">
          <div class="eco-column-1">
            <h2>Our Ecosystem</h2>
            <p>
              Seventh Triangle believes in providing
              solutions that assist businesses in 
              scaling. It has built an organisation
              that resonates with its people and 
              thrives to set a benchmark in its own 
              niche by using a simple approach.
              The company's overall strategy is to 
              comprehend the landscape - Industry,
              Customer, Competition, Company,
              and its People.
            </p>
          </div>
          <div class="eco-column-2">
            <div className="all-img2">
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

      {/* Co-Creator section starts here */}
      <div className="eco-section" id ="ecosystem">
        <div class="eco-row">
          <div class="eco-column-1">
            <h2>Our Co-Creators</h2>
            <h4>The pillars who keep hold of us</h4>
            <p>
              Our partners along with us are determined to excel together
            </p>
          </div>
          <div class="eco-column-2">
            <div className="all-img2">
              <img src={google} alt="" id="image-3" />
              <img src={google} alt="" id="image-3" />
              <img src={google} alt="" id="image-3" />
              <img src={google} alt="" id="image-3" />
            </div>
          </div>
        </div>
      </div>
      {/* Co-Creator section ends here */}

      {/* Learner|Faster| bigger| better section starts here */}
      <div className="strive-section">
        <h3>We strive to get you</h3>
        
        <div className="learner-sec-mob">
          <img src={leaner} alt="" />
          <p>We can create a brand value even with fewer resources</p>
          <img src={faster} alt="" />
          <p>We strive to deliver the work before hand</p>
          <img src={bigger} alt="" />
          <p>We grow through what we go through</p>
          <img src={bttr} alt="" />
          <p>We learn at every stage of work to enhance our skills</p>
        </div>
        <Learner/>
      </div>
      {/* Learner|Faster| bigger| better section ends here */}
      <img src={path4} alt="" id="path4" />
      <img src={path5} alt="" id="path5" />


      {/* Questions Asked section ends here */}
      <div className="strive-section">
        <h3>What we get asked frequently...</h3>

        <div className="questionsNav">
          <p  onClick={() => toggleHover5('Performance')} className={active ? 'active':''}>Performance Marketing</p>
          <p onClick={() => toggleHover5('E-commerce')} className={active2 ? 'active':''} >E-commerce Technology</p>
          <p  onClick={() => toggleHover5('Data')} className={active3 ? 'active':''} >Data Analytics</p>
          <p  onClick={() => toggleHover5('Scaling')} className={active4 ? 'active':''} >Scaling Up Your Business</p>
        </div>

        <Questions head={questionHead}/>

      </div>


    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./static/css/Offer.css";
// import { AiOutlineArrowRight } from 'react-icons/ai'
import arrow from "./static/img/Group41.png";
import arrow_forward from "./static/img/arrow_forward.png";

const Offer = () => {
  const [subArrow1, setSubArrow1] = useState(true)
  const [subArrow2, setSubArrow2] = useState(true)
  const [subArrow3, setSubArrow3] = useState(true)
  const [subArrow4, setSubArrow4] = useState(true)
  const [subArrow5, setSubArrow5] = useState(true)
  const [sub2Arrow1, setSub2Arrow1] = useState(true)
  const [sub2Arrow2, setSub2Arrow2] = useState(true)
  const [sub2Arrow3, setSub2Arrow3] = useState(true)
  const [sub2Arrow4, setSub2Arrow4] = useState(true)
  const [sub2Arrow5, setSub2Arrow5] = useState(true)
  const [sub2Arrow6, setSub2Arrow6] = useState(true)
  const [sub3Arrow1, setSub3Arrow1] = useState(true)
  const [sub3Arrow2, setSub3Arrow2] = useState(true)
  const [sub3Arrow3, setSub3Arrow3] = useState(true)
  const [sub4Arrow1, setSub4Arrow1] = useState(true)
  const [sub4Arrow2, setSub4Arrow2] = useState(true)
  const [sub4Arrow3, setSub4Arrow3] = useState(true)
  const [mainContent, setMainContent] = useState(true)
  const [mainContent1, setMainContent1] = useState(true)
  const [mainContent2, setMainContent2] = useState(true)
  const [mainContent3, setMainContent3] = useState(true)
  const [mainContent4, setMainContent4] = useState(true)
  const [mainContent5, setMainContent5] = useState(true)
  const [main2Content, setMain2Content] = useState(true)
  const [main2Content1, setMain2Content1] = useState(true)
  const [main2Content2, setMain2Content2] = useState(true)
  const [main2Content3, setMain2Content3] = useState(true)
  const [main2Content4, setMain2Content4] = useState(true)
  const [main2Content5, setMain2Content5] = useState(true)
  const [main2Content6, setMain2Content6] = useState(true)
  const [main3Content, setMain3Content] = useState(true)
  const [main3Content1, setMain3Content1] = useState(true)
  const [main3Content2, setMain3Content2] = useState(true)
  const [main3Content3, setMain3Content3] = useState(true)
  const [main4Content, setMain4Content] = useState(true)
  const [main4Content1, setMain4Content1] = useState(true)
  const [main4Content2, setMain4Content2] = useState(true)
  const [main4Content3, setMain4Content3] = useState(true)
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);

  const mainArrow1 = () => {
    setSubArrow1(!subArrow1);
    // setMainContent(!mainContent);
    // setMainContent2(!mainContent2);
    // setMainContent3(!mainContent3);
    // setMainContent4(!mainContent4);
    // setMainContent5(!mainContent5);
  }

  const mainArrow2 = () => {
    setSubArrow2(!subArrow2);
  }

  const mainArrow3 = () => {
    setSubArrow3(!subArrow3);
  }

  const mainArrow4 = () => {
    setSubArrow4(!subArrow4);

  }

  const mainArrow5 = () => {
    setSubArrow5(!subArrow5);

  }

  const main2Arrow1 = () => {
    setSub2Arrow1(!sub2Arrow1);
  }

  const main2Arrow2 = () => {
    setSub2Arrow2(!sub2Arrow2);
  }

  const main2Arrow3 = () => {
    setSub2Arrow3(!sub2Arrow3);
  }

  const main2Arrow4 = () => {
    setSub2Arrow4(!sub2Arrow4);
  }

  const main2Arrow5 = () => {
    setSub2Arrow5(!sub2Arrow5);
  }

  const main2Arrow6 = () => {
    setSub2Arrow6(!sub2Arrow6);
  }


  const main3Arrow1 = () => {
    setSub3Arrow1(!sub3Arrow1);
  }

  const main3Arrow2 = () => {
    setSub3Arrow2(!sub3Arrow2);
  }

  const main3Arrow3 = () => {
    setSub3Arrow3(!sub3Arrow3);
  }



  const main4Arrow1 = () => {
    setSub4Arrow1(!sub4Arrow1);
  }

  const main4Arrow2 = () => {
    setSub4Arrow2(!sub4Arrow2);
  }

  const main4Arrow3 = () => {
    setSub4Arrow3(!sub4Arrow3);
  }


  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClass2 = () => {
    setActive2(!isActive2);
  };

  const toggleClass3 = () => {
    setActive3(!isActive3);
  };
  const toggleClass4 = () => {
    setActive4(!isActive4);
  };
  return (
    //   {/* Offer section starts here */}
    <div className="offer-section" id="services">
      <div className="second-headings">
        <h3>What we Offer</h3>
        <div className="header__hover">
          <h2 onClick={toggleClass}>Technology</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass} />
          <div className={isActive ? "visibleNow" : "notVisible"}>
    
            <div className="container_fluid">
              <div className="row">
                <div className={ mainContent?"col-12":"col-12"}>
                  { mainContent1?(
                  <div className="subheading__hoverO" onMouseEnter={mainArrow1} onMouseLeave={mainArrow1}>
                    <h3> E-Commerce Store Development</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
            
                    { !subArrow1?(<p>Develop end to end E-commerce web store keeping all the practical practices in mind</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { mainContent2?(
                  <div className="subheading__hoverO"  onMouseEnter={mainArrow2} onMouseLeave={mainArrow2}>
                    <h3>UI/UX Optimisation</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !subArrow2?(<p>Providing with the top of the line UI/UX flows derived from processes design thinking and consumer behaviour sciences.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { mainContent3?(
                  <div className="subheading__hoverO"  onMouseEnter={mainArrow3} onMouseLeave={mainArrow3}>
                    <h3>3rd Party Integrations</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !subArrow3?(<p>Enabling multiple platforms to be integrated with each other.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { mainContent4?(
                  <div className="subheading__hoverO"  onMouseEnter={mainArrow4} onMouseLeave={mainArrow4}>
                    <h3> Custom Application Development</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !subArrow4?(<p>Building complex custom solutions in order to achieve business objectives.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}

                  
                  { mainContent5?(
                  <div className="subheading__hoverO"  onMouseEnter={mainArrow5} onMouseLeave={mainArrow5}>
                    <h3> Conversion Optimisation</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !subArrow5?(<p>Throughout Consumer based audit to understand and plug the gaps in the website.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>

              </div>
            </div>
            
          </div>
        </div>



        <div className="header__hover">
          <h2 onClick={toggleClass2}>Marketing</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass2} />
          <div className={isActive2 ? "visibleNow" : "notVisible"}>
            <div className="container_fluid">
              <div className="row">
                <div className={ main2Content?"col-12":"col-12"}>
                  { main2Content1?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow1}  onMouseLeave={main2Arrow1}>
                    <h3> Performance Marketing</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow1?(<p>Executing Omni channel digital campaigns and advertisement management</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main2Content2?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow2}  onMouseLeave={main2Arrow2}>
                    <h3> Media Planning</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow2?(<p>Optimising target audience groups and managing campaigns accordingly</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main2Content3?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow3}  onMouseLeave={main2Arrow3}>
                    <h3> Email Marketing</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow3?(<p>Cohort based segregated Email campaign management</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main2Content4?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow4}  onMouseLeave={main2Arrow4}>
                    <h3> Omni Channel Marketing</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow4?(<p>Building retargeting funnels eficiently via multiple digital channels</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}

                { main2Content5?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow5}  onMouseLeave={main2Arrow5}>
                    <h3> Marketing Strategy</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow5?(<p>Advertently understanding the business objectives and building appropriate marketing roadmaps</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}

                { main2Content6?(
                  <div className="subheading__hoverO" onMouseEnter={main2Arrow6}  onMouseLeave={main2Arrow6}>
                    <h3> Social Media Marketing</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub2Arrow6?(<p>Managing the social media accounts for brands during the entire course</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>
            
              </div>
            </div>
            
          </div>
        </div>

        <div className="header__hover">
          <h2 onClick={toggleClass3}>Data Analytics</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass3} />
          <div className={isActive3 ? "visibleNow" : "notVisible"}>
            <div className="container_fluid">
              <div className="row">
                <div className={ main3Content?"col-12":"col-12"}>
                  { main3Content1?(
                  <div className="subheading__hoverO" onMouseEnter={main3Arrow1}  onMouseLeave={main3Arrow1}>
                    <h3> BI Dashboards</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub3Arrow1?(<p></p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main3Content2?(
                  <div className="subheading__hoverO" onMouseEnter={main3Arrow2}  onMouseLeave={main3Arrow2}>
                    <h3> Data Warehousing</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub3Arrow2?(<p></p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main3Content3?(
                  <div className="subheading__hoverO" onMouseEnter={main3Arrow3}  onMouseLeave={main3Arrow3}>
                    <h3>Data Visualisation</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub3Arrow3?(<p></p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}

                  
                </div>
              </div>
            </div>
            
          </div>
        </div>



        <div className="header__hover">
          <h2 onClick={toggleClass4}>Strategy</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass4} />
          <div className={isActive4 ? "visibleNow" : "notVisible"}>
            <div className="container_fluid">
              <div className="row">
                <div className={ main4Content?"col-12":"col-12"}>
                  { main4Content1?(
                  <div className="subheading__hoverO" onMouseEnter={main4Arrow1}  onMouseLeave={main4Arrow1}>
                    <h3> Growth Consulting</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub4Arrow1?(<p>Creating business roadmaps, by bridging the gaps between buisiness goals and exisiting operations</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main4Content2?(
                  <div className="subheading__hoverO"onMouseEnter={main4Arrow2}  onMouseLeave={main4Arrow2}>
                    <h3> Go to Market Consulting</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub4Arrow2?(<p>Creating launch stratergies, building appropriate target audience groups and creating appropriate digital channel stratergies</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main4Content3?(
                  <div className="subheading__hoverO" onMouseEnter={main4Arrow3}  onMouseLeave={main4Arrow3}>
                    <h3>E-commerce Consulting</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    { !sub4Arrow3?(<p>Understanding the performance of the entire D2C business operations creating appropriate plan of actions to meet the business objectives</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
    //   {/* Offer section ends here */}
  );
};

export default Offer;

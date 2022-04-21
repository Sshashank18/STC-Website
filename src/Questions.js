import React, { useState,useEffect } from "react";
import "./static/css/Questions.css";
// import { AiOutlineArrowRight } from 'react-icons/ai'
import plus from "./static/img/plus.png";
import minus from "./static/img/minus.png";

const Questions = (props) => {
  const [subArrow1, setSubArrow1] = useState(true)
  const [subArrow2, setSubArrow2] = useState(true)
  const [subArrow3, setSubArrow3] = useState(true)
  const [subArrow4, setSubArrow4] = useState(true)
  const [subArrow5, setSubArrow5] = useState(true)
  const [subArrow6, setSubArrow6] = useState(true)
  const [subArrow7, setSubArrow7] = useState(true)
  const [subArrow8, setSubArrow8] = useState(true)
  const [sub2Arrow1, setSub2Arrow1] = useState(true)
  const [sub2Arrow2, setSub2Arrow2] = useState(true)
  const [sub2Arrow3, setSub2Arrow3] = useState(true)
  const [sub2Arrow4, setSub2Arrow4] = useState(true)
  const [sub3Arrow1, setSub3Arrow1] = useState(true)
  const [sub4Arrow1, setSub4Arrow1] = useState(true)
  const [sub4Arrow2, setSub4Arrow2] = useState(true)
  const [sub4Arrow3, setSub4Arrow3] = useState(true)
  const [sub4Arrow4, setSub4Arrow4] = useState(true)
  const [mainContent, setMainContent] = useState(true)
  const [mainContent1, setMainContent1] = useState(true)
  const [mainContent2, setMainContent2] = useState(true)
  const [mainContent3, setMainContent3] = useState(true)
  const [mainContent4, setMainContent4] = useState(true)
  const [mainContent5, setMainContent5] = useState(true)
  const [mainContent6, setMainContent6] = useState(true)
  const [mainContent7, setMainContent7] = useState(true)
  const [mainContent8, setMainContent8] = useState(true)
  const [main2Content, setMain2Content] = useState(true)
  const [main2Content1, setMain2Content1] = useState(true)
  const [main2Content2, setMain2Content2] = useState(true)
  const [main2Content3, setMain2Content3] = useState(true)
  const [main2Content4, setMain2Content4] = useState(true)
  const [main3Content, setMain3Content] = useState(true)
  const [main3Content1, setMain3Content1] = useState(true)
  const [main3Content2, setMain3Content2] = useState(true)
  const [main3Content3, setMain3Content3] = useState(true)
  const [main3Content4, setMain3Content4] = useState(true)
  const [main4Content, setMain4Content] = useState(true)
  const [main4Content1, setMain4Content1] = useState(true)
  const [main4Content2, setMain4Content2] = useState(true)
  const [main4Content3, setMain4Content3] = useState(true)
  const [main4Content4, setMain4Content4] = useState(true)
  
  const mainArrow1 = () => {
    setSubArrow1(!subArrow1);
    setSubArrow2(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow2 = () => {
    setSubArrow2(!subArrow2);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow3 = () => {
    setSubArrow3(!subArrow3);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow4 = () => {
    setSubArrow4(!subArrow4);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow5 = () => {
    setSubArrow5(!subArrow5);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow6(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow6 = () => {
    setSubArrow6(!subArrow6);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow7(true);
    setSubArrow8(true);
  }
  
  const mainArrow7 = () => {
    setSubArrow7(!subArrow7);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow8(true);
  }
  
  const mainArrow8 = () => {
    setSubArrow8(!subArrow8);
    setSubArrow2(true);
    setSubArrow1(true);
    setSubArrow3(true);
    setSubArrow4(true);
    setSubArrow5(true);
    setSubArrow6(true);
    setSubArrow7(true);
  }
  
  const main2Arrow1 = () => {
    setSub2Arrow1(!sub2Arrow1);
    setSub2Arrow2(true);
    setSub2Arrow3(true);
    setSub2Arrow4(true);
    
  }
  
  const main2Arrow2 = () => {
    setSub2Arrow2(!sub2Arrow2);
    setSub2Arrow1(true);
    setSub2Arrow3(true);
    setSub2Arrow4(true);
  }
  
  const main2Arrow3 = () => {
    setSub2Arrow3(!sub2Arrow3);
    setSub2Arrow2(true);
    setSub2Arrow1(true);
    setSub2Arrow4(true);
  }
  
  const main2Arrow4 = () => {
    setSub2Arrow4(!sub2Arrow4);
    setSub2Arrow3(true);
    setSub2Arrow2(true);
    setSub2Arrow1(true);
  }
  
  
  const main3Arrow1 = () => {
    setSub3Arrow1(!sub3Arrow1);
    
  }
  
  
  const main4Arrow1 = () => {
    setSub4Arrow1(!sub4Arrow1);
    setSub4Arrow2(true);
    setSub4Arrow3(true);
    setSub4Arrow4(true);
  }
  
  const main4Arrow2 = () => {
    setSub4Arrow2(!sub4Arrow2);
    setSub4Arrow1(true);
    setSub4Arrow3(true);
    setSub4Arrow4(true);
  }
  
  const main4Arrow3 = () => {
    setSub4Arrow3(!sub4Arrow3);
    setSub4Arrow1(true);
    setSub4Arrow2(true);
    setSub4Arrow4(true);
  }
  
  const main4Arrow4 = () => {
    setSub4Arrow4(!sub4Arrow4);
    setSub4Arrow1(true);
    setSub4Arrow2(true);
    setSub4Arrow3(true);
  }

  if(props.head == 'Performance'){
    return (
      <div className="ques-section">
      <div className="second-headings">
      <div className="header__hover">
      <div className="container_fluid">
      <div className="row2">
      <div className={ mainContent?"col-40":"col-12"}>
      { mainContent1?(
        <div className="subheading__hover" onClick={mainArrow1}>
          <div className="subheading_flex">
              <img className="subheading_img" src={!subArrow1?minus:plus} alt="" />
              <h3> What is digital marketing?</h3>

          </div>
        { !subArrow1?(<p>Digital marketing is advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. It is a system of channels where marketers simply onboard their brands, and advertise online.
          </p>):(<div></div>)}
          </div>
          ):(<div></div>)}
          { mainContent2?(
            <div className="subheading__hover"  onClick={mainArrow2}>
              <div className="subheading_flex">
            <img className="subheading_img" src={!subArrow2?minus:plus} alt="" />
            <h3>What are paid campaigns?</h3>
            </div>
            { !subArrow2?(<p>Paid campaigns are  ways to help discover a brand and its offerings. It is estimated that paid campaigns can bring one of the highest returns on investment (ROI).
              </p>):(<div></div>)}
  </div>
  ):(<div></div>)}
  
  { mainContent3?(
    <div className="subheading__hover"  onClick={mainArrow3}>
      <div className="subheading_flex">
    <img className="subheading_img" src={!subArrow3?minus:plus} alt="" />
    
    <h3>Which platform is best for paid marketing for a D2C brand and Why?</h3>
    </div>
    { !subArrow3?(<p>Facebook and Google are currently leading social media platforms in terms of maximizing sales for any brand which is looking to advertise on digital platforms. These platforms help brands to reach out to the right set of audience and deliver better ROI. 
      R- Social media sites such as facebook and instagram are best for paid marketing campaigns.
      </p>):(<div></div>)}
      </div>
      ):(<div></div>)}
      
      { mainContent4?(
        <div className="subheading__hover"  onClick={mainArrow4}>
          <div className="subheading_flex">
        <img className="subheading_img" src={!subArrow4?minus:plus} alt="" />
        <h3>How are Facebook campaigns different from google campaigns?</h3>
        </div>
        { !subArrow4?(<p>Facebook campaigns and Google campaigns run on a similar pattern, however the only difference between the two campaigns is facebook targets interest based audience while google displays ads of products people specifically search for.
          </p>):(<div></div>)}
          </div>
          ):(<div></div>)}
          
          
          { mainContent5?(
            <div className="subheading__hover"  onClick={mainArrow5}>
<div className="subheading_flex">
            <img className="subheading_img" src={!subArrow5?minus:plus} alt="" />
            <h3> How to judge the performance of a paid campaign?</h3>
            </div>
            { !subArrow5?(<p>The performance of paid campaigns is judged with the use of a few metrics namely, CTR (click through rate), CPC (cost per click), CPM (cost per mille), ROI (return on investment), ROAS (return on ad spend). The reach impression  measures how many times the ad was on screen, tracking the number of people who might have seen the ad as opposed to the actual views.
              </p>):(<div></div>)}
              </div>
              ):(<div></div>)}
              
              
              { mainContent6?(
                <div className="subheading__hover"  onClick={mainArrow6}>
                  <div className="subheading_flex">
                <img className="subheading_img" src={!subArrow6?minus:plus} alt="" />
                <h3> What is the performance marketing and how is it different from brand marketing?</h3>
                </div>
                { !subArrow6?(<p>Performance marketing ensures scaling and building the brand value while brand marketing establishes a relationship between brand and its consumers using its products and services as a proof to support the brand's narrative. 
                </p>):(<div></div>)}
                </div>
                ):(<div></div>)}
                
                { mainContent7?(
                  <div className="subheading__hover"  onClick={mainArrow7}>
                    <div className="subheading_flex">
                  <img className="subheading_img" src={!subArrow7?minus:plus} alt="" />
                  <h3> What types of creatives should be used for paid campaigns?</h3>
                  </div>
                  { !subArrow7?(<p>The creative images that are self explanatory are considered to be most effective as the first thing that the audience explores is the image. The most preferred form of visual communication is well defined through a static post and works well on social media platforms. 
                    </p>):(<div></div>)}
                    </div>
                    ):(<div></div>)}
                    
      { mainContent8?(
        <div className="subheading__hover"  onClick={mainArrow8}>
          <div className="subheading_flex">
        <img className="subheading_img" src={!subArrow8?minus:plus} alt="" />
        <h3> What Makes Ad Creatives Stand Out?</h3>
        </div>
        { !subArrow8?(<p>The unique factor that caters to the requirements of the customer, highlights its USP and also aligns with the ethos,  motto and its cause.
          </p>):(<div></div>)}
          </div>
          ):(<div></div>)}
          
          </div>
          
          </div>
          </div>
          </div>
          </div>
          </div>
          );
        }
        else if(props.head == 'E-commerce'){
          return (
            <div className="ques-section">
            <div className="second-headings">
            <div className="header__hover">
            <div className="container_fluid">
            <div className="row2">
            <div className={ mainContent?"col-40":"col-12"}>
            { main2Content1?(
              <div className="subheading__hover" onClick={main2Arrow1}>
                <div className="subheading_flex">
              <img className="subheading_img" src={!sub2Arrow1?minus:plus} alt="" />
              <h3> What all practices we keep in mind for developing an E-commerce web store?</h3>
              </div>
              { !sub2Arrow1?(<p> The first and foremost factor to keep in mind while developing an E-commerce website is registering a short domain name, followed by developing a web hosting provider which directly impacts on the success of the web store, along with relevant theme and design that correlates with our industry and connects consumers to our site and setting up and upgraded shopping cart section that convinces consumers to add more products to their cart before they checkout.
</p>):(<div></div>)}
              </div>
              ):(<div></div>)}
              { main2Content2?(
                <div className="subheading__hover"  onClick={main2Arrow2}>
                  <div className="subheading_flex">
                <img className="subheading_img" src={!sub2Arrow2?minus:plus} alt="" />
                <h3>How business objectives help us build appropriate marketing roadmaps?</h3>
                </div>
                { !sub2Arrow2?(<p>Collaborating on reasonable and achievable objectives help us build an appropriate marketing road map which consists of setting rational goals, creating initiatives for their reach, creating a framework for the same followed by building campaigns to connect them to our strategy.
</p>):(<div></div>)}
                </div>
                ):(<div></div>)}
                
                { main2Content3?(
                  <div className="subheading__hover"  onClick={main2Arrow3}>
                    <div className="subheading_flex">
                  <img className="subheading_img" src={!sub2Arrow3?minus:plus} alt="" />
                  <h3>How do you measure the impact UI/UX/Tech has on E-commerce success?</h3>
                  </div>
                  { !sub2Arrow3?(<p>UI/UX  increases the number of users of a specific application, as with its design it improves the user interface and enhances customer experience, providing customers with what they are looking for.
</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main2Content4?(
                    <div className="subheading__hover"  onClick={main2Arrow4}>
                      <div className="subheading_flex">
                    <img className="subheading_img" src={!sub2Arrow4?minus:plus} alt="" />
                    <h3>Why should your website's e-commerce have a separate performance from your Amazon platform performance?</h3>
                    </div>
                    { !sub2Arrow4?(<p>The e-commerce platforms like amazon and flipkart are few of the highest revenue generating platforms. These sell only a particular best selling product of a particular brand, hence there has to be a separate interface performance tracking to know how much traffic is being generated on your website, and how much is it contributing in terms of performance for a clear picture.
</p>):(<div></div>)}
                    </div>
                    ):(<div></div>)}
                    
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    );
                  }
                  else if (props.head == 'Data'){
                    return (
                      <div className="ques-section">
                      <div className="second-headings">
                      <div className="header__hover">
                  <div className="container_fluid">
                  <div className="row2">
                  <div className={ mainContent?"col-40":"col-12"}>
                  { main3Content1?(
                    <div className="subheading__hover" onClick={main3Arrow1}>
                      <div className="subheading_flex">
                    <img className="subheading_img" src={!sub3Arrow1?minus:plus} alt="" />
                    <h3> What is the use of a BI dashboard?</h3>
                    </div>
                    { !sub3Arrow1?(<p></p>):(<div></div>)}
                    </div>
                    ):(<div></div>)}
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    );
                  }else{
                    return (
                      <div className="ques-section">
                      <div className="second-headings">
                      <div className="header__hover">
                      <div className="container_fluid">
                      <div className="row2">
                      <div className={ mainContent?"col-40":"col-12"}>
                      { main4Content1?(
                        <div className="subheading__hover" onClick={main4Arrow1}>
                          <div className="subheading_flex">
                        <img className="subheading_img" src={!sub4Arrow1?minus:plus} alt="" />
                        <h3> How to take your brand digital?</h3>
                        </div>
                        { !sub4Arrow1?(<p>Digital branding is creating value around your business in the online domain which helps your consumers relate with your business instantly. It helps in optimized reach, and digital factors contribute to better connecting with your consumers, leading conversations and interactions.

</p>):(<div></div>)}
                        </div>
                        ):(<div></div>)}
                        { main4Content2?(
                          <div className="subheading__hover"  onClick={main4Arrow2}>
                            <div className="subheading_flex">
                          <img className="subheading_img" src={!sub4Arrow2?minus:plus} alt="" />
                          <h3>How does alignment of marketing, product and tech with each other affects the business?</h3>
                          </div>
                          { !sub4Arrow2?(<p> Alignment between product, tech and marketing teams can benefit an organization in product familiarity, improvement team skills and development and a collaborative product-marketing team can provide the product team with insight into the marketplace needed to align the efforts of the product team with what market needs.
</p>):(<div></div>)}
                          </div>
                          ):(<div></div>)}
                                        
    { main4Content3?(
      <div className="subheading__hover"  onClick={main4Arrow3}>
        <div className="subheading_flex">
      <img className="subheading_img" src={!sub4Arrow3?minus:plus} alt="" />
      <h3>When is it actually the right time for you to increase your marketing budget for scaling your business?</h3>
      </div>
      { !sub4Arrow3?(<p>Scaling up the budget of an ad is based on the performance of the ad. If the ad is a winning ad, it is recommended to change your budget every 3-5 days.</p>):(<div></div>)}
      </div>
      ):(<div></div>)}
      
      { main4Content4?(
        <div className="subheading__hover"  onClick={main4Arrow4}>
          <div className="subheading_flex">
        <img className="subheading_img" src={!sub4Arrow4?minus:plus} alt="" />
        <h3>How to get repeated potential buyers or customers for your ecommerce platform?</h3>
        </div>
        { !sub4Arrow4?(<p>By providing special discounts, inviting them to loyalty programs, providing free shipping and optimizing transactional email campaigns are a few ways to improve your rate of repeated customers.</p>):(<div></div>)}
        </div>
        ):(<div></div>)}
        
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
        
        );
      }
      
      
    };
    
    export default Questions;
                    
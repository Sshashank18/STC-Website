import React, { useState } from "react";
import "./static/css/Learner.css";
import one from "./static/img/1.png";
import two from "./static/img/2.png";
import three from "./static/img/3.png";
import four from "./static/img/4.png";
import leaner from "./static/img/maskGroup5.png";
import faster from "./static/img/maskGroup6.png";
import bigger from "./static/img/maskGroup7.png";
import bttr from "./static/img/maskGroup8.png";

export const Learner = () => {
  return (
    <div className="learner-sec">
      <div className="main-container">
        <img src={leaner} alt="Avatar" className="image" />
        <div className="another-overlay">
          <img src={one} alt="" className="text-one" />
        </div>
      </div>
      <div className="main-container-2">
        <img src={faster} alt="Avatar" className="image" />
        <div className="another-overlay-2">
          <img src={two} alt="" className="text-one-2" />
        </div>
      </div>
      <div className="main-container-3">
        <img src={bigger} alt="Avatar" className="image" />
        <div className="another-overlay-3">
          <img src={three} alt="" classNameName="text-one-3" />
        </div>
      </div>
      <div className="main-container-4">
        <img src={bttr} alt="Avatar" className="image" style={{borderRight:"none"}} />
        <div className="another-overlay-4">
          <img src={four} alt="" classNameName="text-one-4" />
        </div>
      </div>
      {/* <div className="row" style={{width:"80%",margin:"auto"}}>
        <div className="col" style={{border:"2px solid red"}}>
        <img src={leaner} alt="Avatar" className="image" style={{width:"150px"}} />
        </div>
        <div className="col" style={{border:"2px solid red"}}>
        <img src={faster} alt="Avatar" className="image" style={{width:"150px"}} />
        </div>
        <div className="col" style={{border:"2px solid red"}}>
        <img src={bigger} alt="" classNameName="text-one-3" style={{width:"150px"}} />
        </div>
        <div className="col" style={{border:"2px solid red"}}>
        <img src={bttr} alt="" classNameName="text-one-4" style={{width:"150px"}} />
          </div>
      </div> */}
    </div>
  );
};

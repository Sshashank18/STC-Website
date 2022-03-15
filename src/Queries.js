import React from "react";
import "./static/css/Queries.css";
import { NavLink } from "react-router-dom";
import Logo from "./static/img/group37.png";
import menu from "./static/img/maskGroup12.png";
import path3 from './static/img/Group46.svg'
import Header from "./components/Header";

const Queries = () => {
  return (
    <>
      <Header/>
      <div className="box-1">
        <div className="hover-heading">
          <h1>
            How could performance marketing help scale a hygiene business?
          </h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            iure hic quasi minus cupiditate quibusdam minima a amet unde, eaque,
            perspiciatis ut. Voluptatum a quibusdam dolorum, velit possimus aut
            repudiandae!
          </p>
      </div>
      <div className="box-1">
      <div className="hover-heading">
      <h1>
            Can you leverage Shopify to build yourself a competative brand?
          </h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            iure hic quasi minus cupiditate quibusdam minima a amet unde, eaque,
            perspiciatis ut. Voluptatum a quibusdam dolorum, velit possimus aut
            repudiandae!
          </p>
      </div>
      <div className="box-1">
      <div className="hover-heading">
      <h1>
            How can digital transformation help traditional business progress?
          </h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            iure hic quasi minus cupiditate quibusdam minima a amet unde, eaque,
            perspiciatis ut. Voluptatum a quibusdam dolorum, velit possimus aut
            repudiandae!
          </p>
          <img src={path3} alt=""  id="path3"/>
      </div>
    </>
  );
};

export default Queries;

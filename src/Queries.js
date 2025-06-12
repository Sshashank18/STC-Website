import React,{useState} from "react";
import "./static/css/Queries.css";
import { NavLink } from "react-router-dom";
import Logo from "./static/img/group37.png";
import menu from "./static/img/maskGroup12.png";
import path3 from './static/img/Group46.svg'
import Header from "./components/Header";
import Questions from "./Questions";

const Queries = () => {

  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [questionHead, setQuestionHead] = useState('Performance');

  const toggleHover5 = (name) => {
    setQuestionHead(name)
    if(name=='Performance') {setActive(true);  setActive2(false); setActive3(false); setActive4(false);}                          
    else if(name=='E-commerce') {setActive2(true); setActive(false); setActive3(false); setActive4(false);}                        
    else if(name=='Data') {setActive3(true);  setActive2(false); setActive4(false); setActive(false);}                            
    else if(name=='Scaling') {setActive4(true);  setActive(false); setActive2(false); setActive3(false); }                       
  };


  return (
    <>
      <Header/>

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



      {/* <div className="box-1">
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
      </div> */}
    </>
  );
};

export default Queries;

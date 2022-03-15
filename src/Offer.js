import React, { useState } from "react";
import "./static/css/Offer.css";
// import { AiOutlineArrowRight } from 'react-icons/ai'
import arrow from "./static/img/Group41.png";
import arrow_forward from "./static/img/arrow_forward.png";
import download from "./static/img/download_file.png";

const Offer = () => {
  const [subArrow1, setSubArrow1] = useState(true)
  const [subArrow2, setSubArrow2] = useState(true)
  const [subArrow3, setSubArrow3] = useState(true)
  const [subArrow4, setSubArrow4] = useState(true)
  const [sub2Arrow1, setSub2Arrow1] = useState(true)
  const [sub2Arrow2, setSub2Arrow2] = useState(true)
  const [sub2Arrow3, setSub2Arrow3] = useState(true)
  const [sub2Arrow4, setSub2Arrow4] = useState(true)
  const [sub3Arrow1, setSub3Arrow1] = useState(true)
  const [sub3Arrow2, setSub3Arrow2] = useState(true)
  const [sub3Arrow3, setSub3Arrow3] = useState(true)
  const [sub3Arrow4, setSub3Arrow4] = useState(true)
  const [sub4Arrow1, setSub4Arrow1] = useState(true)
  const [sub4Arrow2, setSub4Arrow2] = useState(true)
  const [sub4Arrow3, setSub4Arrow3] = useState(true)
  const [sub4Arrow4, setSub4Arrow4] = useState(true)
  const [mainContent, setMainContent] = useState(true)
  const [mainContent1, setMainContent1] = useState(true)
  const [mainContent2, setMainContent2] = useState(true)
  const [mainContent3, setMainContent3] = useState(true)
  const [mainContent4, setMainContent4] = useState(true)
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
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);

  const mainArrow1 = () => {
    setSubArrow1(!subArrow1);
    setMainContent(!mainContent);
    setMainContent2(!mainContent2);
    setMainContent3(!mainContent3);
    setMainContent4(!mainContent4);
  }

  const mainArrow2 = () => {
    setSubArrow2(!subArrow2);
    setMainContent(!mainContent);
    setMainContent1(!mainContent1);
    setMainContent3(!mainContent3);
    setMainContent4(!mainContent4);
  }

  const mainArrow3 = () => {
    setSubArrow3(!subArrow3);
    setMainContent(!mainContent);
    setMainContent2(!mainContent2);
    setMainContent1(!mainContent1);
    setMainContent4(!mainContent4);
  }

  const mainArrow4 = () => {
    setSubArrow4(!subArrow4);
    setMainContent(!mainContent);
    setMainContent2(!mainContent2);
    setMainContent3(!mainContent3);
    setMainContent1(!mainContent1);
  }

  const main2Arrow1 = () => {
    setSub2Arrow1(!sub2Arrow1);
    setMain2Content(!main2Content);
    setMain2Content2(!main2Content2);
    setMain2Content3(!main2Content3);
    setMain2Content4(!main2Content4);
  }

  const main2Arrow2 = () => {
    setSub2Arrow2(!sub2Arrow2);
    setMain2Content(!main2Content);
    setMain2Content1(!main2Content1);
    setMain2Content3(!main2Content3);
    setMain2Content4(!main2Content4);
  }

  const main2Arrow3 = () => {
    setSub2Arrow3(!sub2Arrow3);
    setMain2Content(!main2Content);
    setMain2Content2(!main2Content2);
    setMain2Content1(!main2Content1);
    setMain2Content4(!main2Content4);
  }

  const main2Arrow4 = () => {
    setSub2Arrow4(!sub2Arrow4);
    setMain2Content(!main2Content);
    setMain2Content2(!main2Content2);
    setMain2Content3(!main2Content3);
    setMain2Content1(!main2Content1);
  }


  const main3Arrow1 = () => {
    setSub3Arrow1(!sub3Arrow1);
    setMain3Content(!main3Content);
    setMain3Content2(!main3Content2);
    setMain3Content3(!main3Content3);
    setMain3Content4(!main3Content4);
  }

  const main3Arrow2 = () => {
    setSub3Arrow2(!sub3Arrow2);
    setMain3Content(!main3Content);
    setMain3Content1(!main3Content1);
    setMain3Content3(!main3Content3);
    setMain3Content4(!main3Content4);
  }

  const main3Arrow3 = () => {
    setSub3Arrow3(!sub3Arrow3);
    setMain3Content(!main3Content);
    setMain3Content2(!main3Content2);
    setMain3Content1(!main3Content1);
    setMain3Content4(!main3Content4);
  }

  const main3Arrow4 = () => {
    setSub3Arrow4(!sub3Arrow4);
    setMain3Content(!main3Content);
    setMain3Content2(!main3Content2);
    setMain2Content3(!main3Content3);
    setMain3Content1(!main3Content1);
  }


  const main4Arrow1 = () => {
    setSub4Arrow1(!sub4Arrow1);
    setMain4Content(!main4Content);
    setMain4Content2(!main4Content2);
    setMain4Content3(!main4Content3);
    setMain4Content4(!main4Content4);
  }

  const main4Arrow2 = () => {
    setSub4Arrow2(!sub4Arrow2);
    setMain4Content(!main4Content);
    setMain4Content1(!main4Content1);
    setMain4Content3(!main4Content3);
    setMain4Content4(!main4Content4);
  }

  const main4Arrow3 = () => {
    setSub4Arrow3(!sub4Arrow3);
    setMain4Content(!main4Content);
    setMain4Content2(!main4Content2);
    setMain4Content1(!main4Content1);
    setMain4Content4(!main4Content4);
  }

  const main4Arrow4 = () => {
    setSub4Arrow4(!sub4Arrow4);
    setMain4Content(!main4Content);
    setMain4Content2(!main4Content2);
    setMain4Content3(!main4Content3);
    setMain4Content1(!main4Content1);
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
    <div className="offer-section">
      <div className="second-headings">
        <h3>What we Offer</h3>
        <div className="header__hover">
          <h2>Growth & Marketing</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass} />
          <div className={isActive ? "visibleNow" : "notVisible"}>
            { mainContent ? (<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti debitis aliquam repellendus sit saepe. Odit nobis vero
              natus architecto obcaecati temporibus veritatis soluta repellendus
              vitae animi magnam mollitia enim, adipisci hic ullam incidunt,
              sint dolore, illum quasi nesciunt at doloremque assumenda!
              Excepturi nesciunt asperiores aut commodi dicta eos, earum ipsa?
              Aut minus earum, inventore, amet voluptatibus nobis iusto deleniti
              eligendi rerum saepe deserunt beatae at, obcaecati accusantium
              molestiae dolorum dolor cum reprehenderit nisi consequatur quasi!
              Aperiam, earum ipsum commodi necessitatibus reprehenderit harum
              illo saepe voluptatem consectetur, consequuntur omnis. Obcaecati
              quod fugit dolores modi, ullam deserunt debitis expedita. Quae,
              eligendi quisquam.
            </p>):(<div></div>)}

            <div className="container_fluid">
              <div className="row">
                <div className={ mainContent?"col-8":"col-12"}>
                  { mainContent1?(
                  <div className="subheading__hover" onClick={mainArrow1}>
                    <div className={!subArrow1?"subheading__hover__div":""}>
                    <h3> Digital Marketing and digital acquisition.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !subArrow1?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { mainContent2?(
                  <div className="subheading__hover" onClick={mainArrow2}>
                    <div className={!subArrow2?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !subArrow2?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { mainContent3?(
                  <div className="subheading__hover" onClick={mainArrow3}>
                    <div className={!subArrow3?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !subArrow3?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { mainContent4?(
                  <div className="subheading__hover" onClick={mainArrow4}>
                    <div className={!subArrow4?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !subArrow4?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>
                { mainContent?(
                  <div className="col-4">
                  <div className="white__paper__download d-flex justify-content-end align-items-end">
                    <h3>White Paper</h3>
                    <img src={download} alt="" />
                  </div>
                </div>
                ):(<div></div>)}
              </div>
            </div>
            
          </div>
        </div>



        <div className="header__hover">
          <h2>E-commerce Centric Development</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass2} />
          <div className={isActive2 ? "visibleNow" : "notVisible"}>
            { main2Content ? (<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti debitis aliquam repellendus sit saepe. Odit nobis vero
              natus architecto obcaecati temporibus veritatis soluta repellendus
              vitae animi magnam mollitia enim, adipisci hic ullam incidunt,
              sint dolore, illum quasi nesciunt at doloremque assumenda!
              Excepturi nesciunt asperiores aut commodi dicta eos, earum ipsa?
              Aut minus earum, inventore, amet voluptatibus nobis iusto deleniti
              eligendi rerum saepe deserunt beatae at, obcaecati accusantium
              molestiae dolorum dolor cum reprehenderit nisi consequatur quasi!
              Aperiam, earum ipsum commodi necessitatibus reprehenderit harum
              illo saepe voluptatem consectetur, consequuntur omnis. Obcaecati
              quod fugit dolores modi, ullam deserunt debitis expedita. Quae,
              eligendi quisquam.
            </p>):(<div></div>)}

            <div className="container_fluid">
              <div className="row">
                <div className={ main2Content?"col-8":"col-12"}>
                  { main2Content1?(
                  <div className="subheading__hover" onClick={main2Arrow1}>
                    <div className={!sub2Arrow1?"subheading__hover__div":""}>
                    <h3> Digital Marketing and digital acquisition.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub2Arrow1?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main2Content2?(
                  <div className="subheading__hover" onClick={main2Arrow2}>
                    <div className={!sub2Arrow2?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub2Arrow2?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main2Content3?(
                  <div className="subheading__hover" onClick={main2Arrow3}>
                    <div className={!sub2Arrow3?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub2Arrow3?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main2Content4?(
                  <div className="subheading__hover" onClick={main2Arrow4}>
                    <div className={!sub2Arrow4?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub2Arrow4?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>
                { main2Content?(
                  <div className="col-4">
                  <div className="white__paper__download d-flex justify-content-end align-items-end">
                    <h3>White Paper</h3>
                    <img src={download} alt="" />
                  </div>
                </div>
                ):(<div></div>)}
              </div>
            </div>
            
          </div>
        </div>

        <div className="header__hover">
          <h2>Design & Creative</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass3} />
          <div className={isActive3 ? "visibleNow" : "notVisible"}>
            { main3Content ? (<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti debitis aliquam repellendus sit saepe. Odit nobis vero
              natus architecto obcaecati temporibus veritatis soluta repellendus
              vitae animi magnam mollitia enim, adipisci hic ullam incidunt,
              sint dolore, illum quasi nesciunt at doloremque assumenda!
              Excepturi nesciunt asperiores aut commodi dicta eos, earum ipsa?
              Aut minus earum, inventore, amet voluptatibus nobis iusto deleniti
              eligendi rerum saepe deserunt beatae at, obcaecati accusantium
              molestiae dolorum dolor cum reprehenderit nisi consequatur quasi!
              Aperiam, earum ipsum commodi necessitatibus reprehenderit harum
              illo saepe voluptatem consectetur, consequuntur omnis. Obcaecati
              quod fugit dolores modi, ullam deserunt debitis expedita. Quae,
              eligendi quisquam.
            </p>):(<div></div>)}

            <div className="container_fluid">
              <div className="row">
                <div className={ main3Content?"col-8":"col-12"}>
                  { main3Content1?(
                  <div className="subheading__hover" onClick={main3Arrow1}>
                    <div className={!sub3Arrow1?"subheading__hover__div":""}>
                    <h3> Digital Marketing and digital acquisition.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub3Arrow1?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main3Content2?(
                  <div className="subheading__hover" onClick={main3Arrow2}>
                    <div className={!sub3Arrow2?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub3Arrow2?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main3Content3?(
                  <div className="subheading__hover" onClick={main3Arrow3}>
                    <div className={!sub3Arrow3?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub3Arrow3?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main3Content4?(
                  <div className="subheading__hover" onClick={main3Arrow4}>
                    <div className={!sub3Arrow4?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub3Arrow4?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>
                { main3Content?(
                  <div className="col-4">
                  <div className="white__paper__download d-flex justify-content-end align-items-end">
                    <h3>White Paper</h3>
                    <img src={download} alt="" />
                  </div>
                </div>
                ):(<div></div>)}
              </div>
            </div>
            
          </div>
        </div>



        <div className="header__hover">
          <h2>Buisness Intelligence</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass4} />
          <div className={isActive4 ? "visibleNow" : "notVisible"}>
            { main4Content ? (<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti debitis aliquam repellendus sit saepe. Odit nobis vero
              natus architecto obcaecati temporibus veritatis soluta repellendus
              vitae animi magnam mollitia enim, adipisci hic ullam incidunt,
              sint dolore, illum quasi nesciunt at doloremque assumenda!
              Excepturi nesciunt asperiores aut commodi dicta eos, earum ipsa?
              Aut minus earum, inventore, amet voluptatibus nobis iusto deleniti
              eligendi rerum saepe deserunt beatae at, obcaecati accusantium
              molestiae dolorum dolor cum reprehenderit nisi consequatur quasi!
              Aperiam, earum ipsum commodi necessitatibus reprehenderit harum
              illo saepe voluptatem consectetur, consequuntur omnis. Obcaecati
              quod fugit dolores modi, ullam deserunt debitis expedita. Quae,
              eligendi quisquam.
            </p>):(<div></div>)}

            <div className="container_fluid">
              <div className="row">
                <div className={ main4Content?"col-8":"col-12"}>
                  { main4Content1?(
                  <div className="subheading__hover" onClick={main4Arrow1}>
                    <div className={!sub4Arrow1?"subheading__hover__div":""}>
                    <h3> Digital Marketing and digital acquisition.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub4Arrow1?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  { main4Content2?(
                  <div className="subheading__hover" onClick={main4Arrow2}>
                    <div className={!sub4Arrow2?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub4Arrow2?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main4Content3?(
                  <div className="subheading__hover" onClick={main4Arrow3}>
                    <div className={!sub4Arrow3?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub4Arrow3?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                  { main4Content4?(
                  <div className="subheading__hover" onClick={main4Arrow4}>
                    <div className={!sub4Arrow4?"subheading__hover__div":""}>
                    <h3> Lorem ipsum dolor sit.</h3>
                    <img className="subheading__hover__img" src={arrow_forward} alt="" />
                    </div>
                    { !sub4Arrow4?(<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias eum inventore optio accusamus, odit impedit officia mollitia enim voluptas reprehenderit eligendi ratione? Fugit quos incidunt deserunt dolorum est earum.</p>):(<div></div>)}
                  </div>
                  ):(<div></div>)}
                  
                </div>
                { main4Content?(
                  <div className="col-4">
                  <div className="white__paper__download d-flex justify-content-end align-items-end">
                    <h3>White Paper</h3>
                    <img src={download} alt="" />
                  </div>
                </div>
                ):(<div></div>)}
              </div>
            </div>
            
          </div>
        </div>


        
        {/* <div className="header__hover">
          <h2>E-commerce Centric Development</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass}/>
        </div>
        <div className="header__hover">
          <h2>Design & Creative</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass}/>
        </div>
        <div className="header__hover">
          <h2>Buisness Intelligence</h2>
          <img className="header__hover__img" src={arrow} alt="" onClick={toggleClass}/>
        </div> */}
      </div>
    </div>
    //   {/* Offer section ends here */}
  );
};

export default Offer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Adsgn from "../components/projects/Adsgn";
import Groupomania from "../components/projects/Groupomania";
import LaboT from "../components/projects/LaboT";

const Home = () => {
  const [cardLaboT, setCardLaboT] = useState(false);
  const [cardaDesign, setCardaDesign] = useState(false);
  const [cardGroupomania, setCardGroupomania] = useState(false);
  const test = document.querySelector("html");

  if (cardLaboT) {
    document.body.classList.add("no-scroll");
    test.classList.add("no-scroll");
  }

  return (
    <main
    // className={cardLaboT ? "no-scroll" : null}
    >
      <section className="home">
        <img
          className="logo-bg"
          src={process.env.PUBLIC_URL + "/img/logo/photo-id.png"}
          alt="logo lebolloch_dev : Développeur web / intégrateur web"
        />
        <h1 aria-label="Hey, Je suis Guillaume Le Bolloch, Développeur Web">
          <span>Hi,</span>
          <span>I'm Guillaume,</span>
          <span>Junior Web Developer</span>
          <span>Shortly based in Montreal</span>
        </h1>
        <p>
          I actually looking for new challenges in which I could apply my
          knowledge in front-end development. <br />
          If you are intersted in working with me, don't hesitate to contact me!
        </p>
        <a
          href="mailto:lebolloch.g@gmail.com"
          title="page des projets"
          className="button-A"
        >
          <span></span>
          <h4>Contact me!</h4>
        </a>
        <div className="scroll">
          <span>scroll</span>
          <i class="fas fa-sort-down"></i>
        </div>
        <div className="scroll right">
          <span>scroll</span>
          <i class="fas fa-sort-down"></i>
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="info-projects">
          <p>Here follows some of my projects</p>
        </div>
        <div className="projects-container">
          <div className="card-parent">
            <div
              className="card-project labo-t"
              onClick={() => setCardLaboT(!cardLaboT)}
            ></div>
          </div>
          <div className="card-parent">
            <div
              className="card-project aDesign"
              onClick={() => setCardaDesign(!cardaDesign)}
            ></div>
          </div>
          <div className="card-parent">
            <div
              className="card-project groupomania"
              onClick={() => setCardGroupomania(!cardGroupomania)}
            ></div>
          </div>
        </div>
        <div className="see-more">
          <button className="button-B">
            <h4>See more ... </h4>
          </button>
        </div>

        {cardLaboT && (
          <>
            <div className="info-card">
              <div
                className="closeButton"
                onClick={() => setCardLaboT(!cardLaboT)}
              >
                <span></span>
              </div>
              <LaboT />
            </div>
            <div
              className="unshowCard"
              onClick={() => setCardLaboT(!cardLaboT)}
            ></div>
          </>
        )}
        {cardaDesign && (
          <>
            <div className="info-card">
              <div
                className="closeButton"
                onClick={() => setCardaDesign(!cardaDesign)}
              >
                <span></span>
              </div>
              <Adsgn />
            </div>
            <div
              className="unshowCard"
              onClick={() => setCardaDesign(!cardaDesign)}
            ></div>
          </>
        )}
        {cardGroupomania && (
          <>
            <div className="info-card">
              <div
                className="closeButton"
                onClick={() => setCardGroupomania(!cardGroupomania)}
              >
                <span></span>
              </div>
              <Groupomania />
            </div>
            <div
              className="unshowCard"
              onClick={() => setCardGroupomania(!cardGroupomania)}
            ></div>
          </>
        )}
        <span className="beforeStyle"></span>
      </section>
      {/* <section className="contact-me">
        <h2>Contact me</h2>
        <p>
          Open to work with you in your company. <br /> If you have request or
          question, don't hesitate to use the from.{" "}
        </p>
        <div className="contact-me-section">
          <Contact />
        </div>
        <span className="beforeStyle"></span>
      </section> */}

      {/* <section className="test">
        <h2>test 3</h2>
      </section> */}
    </main>
  );
};

export default Home;

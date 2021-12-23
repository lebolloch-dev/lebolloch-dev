import React, { useState } from "react";
import Adsgn from "../components/projects/Adsgn";
import Groupomania from "../components/projects/Groupomania";
import HotTakes from "../components/projects/HotTakes";
import LaboT from "../components/projects/LaboT";

const Projects = () => {
  const [cardLaboT, setCardLaboT] = useState(false);
  const [cardaDesign, setCardaDesign] = useState(false);
  const [cardGroupomania, setCardGroupomania] = useState(false);
  const [cardHotTakes, setCardHotTakes] = useState(false);
  return (
    <main className="main-project">
      <section className="projects">
        <h2>Projects</h2>
        <p className="projects-p">All my projects</p>
        <div className="projects-container">
          <div className="cards1-3">
            <div className="card-parent-project">
              <div
                className="card-project labo-t"
                onClick={() => setCardLaboT(!cardLaboT)}
              ></div>
            </div>
            <div className="card-parent-project">
              <div
                className="card-project aDesign"
                onClick={() => setCardaDesign(!cardaDesign)}
              ></div>
            </div>
            <div className="card-parent-project">
              <div
                className="card-project groupomania"
                onClick={() => setCardGroupomania(!cardGroupomania)}
              ></div>
            </div>
          </div>

          <div className="cards4-6">
            <div className="card-parent-project">
              <div
                className="card-project hot-takes"
                onClick={() => setCardHotTakes(!cardHotTakes)}
              ></div>
            </div>
            <div className="card-parent-project">
              <div
                className="card-project groupomania"
                onClick={() => setCardGroupomania(!cardGroupomania)}
              ></div>
            </div>
            <div className="card-parent-project">
              <div
                className="card-project groupomania"
                onClick={() => setCardGroupomania(!cardGroupomania)}
              ></div>
            </div>
          </div>
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
              className="unshowCard project-page"
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
              className="unshowCard project-page"
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
              className="unshowCard project-page"
              onClick={() => setCardGroupomania(!cardGroupomania)}
            ></div>
          </>
        )}
        {cardHotTakes && (
          <>
            <div className="info-card">
              <div
                className="closeButton"
                onClick={() => setCardHotTakes(!cardHotTakes)}
              >
                <span></span>
              </div>
              <HotTakes />
            </div>
            <div
              className="unshowCard project-page"
              onClick={() => setCardHotTakes(!cardHotTakes)}
            ></div>
          </>
        )}
      </section>
    </main>
  );
};

export default Projects;

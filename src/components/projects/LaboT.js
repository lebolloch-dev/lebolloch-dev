import React from "react";

const LaboT = () => {
  return (
    <>
      <div className="detail-client">
        <h3>Labo T.</h3>
        <h4>Front-end web development</h4>
        <h5>Date: 2021</h5>
      </div>
      <div className="representation-site">
        <img
          className="mobile"
          src={process.env.PUBLIC_URL + "/img/projects/labo-t/labot-mobile.jpg"}
          alt=""
        />
        <img
          className="desktop"
          src={
            process.env.PUBLIC_URL + "/img/projects/labo-t/labot-desktop.jpg"
          }
          alt=""
        />
        <img
          className="tablet"
          src={process.env.PUBLIC_URL + "/img/projects/labo-t/labot-tablet.jpg"}
          alt=""
        />
      </div>
      <div className="desciption-siteWeb">
        <a
          href="https://www.labo-t.fr/"
          rel="noopener noreferrer"
          target="_blank"
          title="Labo T."
          className="button-A"
        >
          <span></span>
          <h4>Visit web site</h4>
        </a>
        <div className="language">
          <p>React</p>
          <p>Sass</p>
          <p>Html</p>
          <p>Javascript</p>
          <p>Responsive</p>
          <p>Photoshop</p>
        </div>
      </div>
    </>
  );
};

export default LaboT;

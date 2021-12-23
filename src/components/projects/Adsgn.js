import React from "react";

const Adsgn = () => {
  return (
    <>
      <div className="detail-client">
        <h3>ADsgn</h3>
        <h4>Front-end web development</h4>
        <h5>Date: 2021</h5>
      </div>
      <div className="representation-site">
        <img
          className="mobile"
          src={
            process.env.PUBLIC_URL + "/img/projects/ADesign/adesign-mobile.jpg"
          }
          alt=""
        />
        <img
          className="desktop"
          src={
            process.env.PUBLIC_URL + "/img/projects/ADesign/adesign-desktop.jpg"
          }
          alt=""
        />
        <img
          className="tablet"
          src={
            process.env.PUBLIC_URL + "/img/projects/ADesign/adesign-tablet.jpg"
          }
          alt=""
        />
      </div>
      <div className="desciption-siteWeb">
        <a
          href="https://lebolloch-dev.github.io/A-D.sgn/"
          rel="noopener noreferrer"
          target="_blank"
          title="A-D.sgn"
          className="button-A"
        >
          <span></span>
          <h4>Visit web site</h4>
        </a>
        <div className="language">
          <p>JQuery</p>
          <p>Sass</p>
          <p>Html</p>
          <p>Javascript</p>
          <p>Responsive</p>
        </div>
      </div>
    </>
  );
};

export default Adsgn;

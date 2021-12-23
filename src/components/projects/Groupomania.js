import React from "react";

const Groupomania = () => {
  return (
    <>
      <div className="detail-client">
        <h3>Groupomania</h3>
        <h4>Front-end & Back-end web development</h4>
        <h5>Date: 2021</h5>
      </div>
      <div className="representation-site">
        <img
          className="mobile"
          src={
            process.env.PUBLIC_URL +
            "/img/projects/groupomania/groupomania-mobile.jpg"
          }
          alt=""
        />
        <video
          loop
          autoPlay
          className="desktop"
          src={
            process.env.PUBLIC_URL +
            "/img/projects/groupomania/groupomania-desktop.mp4"
          }
          alt=""
        />
        <img
          className="tablet"
          src={
            process.env.PUBLIC_URL +
            "/img/projects/groupomania/groupomania-tablet.jpg"
          }
          alt=""
        />
      </div>
      <div className="desciption-siteWeb">
        <a
          href="https://github.com/lebolloch-dev/GuillaumeLebolloch_7_25092021"
          rel="noopener noreferrer"
          target="_blank"
          title="Groupomania"
          className="button-A"
        >
          <span></span>
          <h4>View code</h4>
        </a>
        <div className="language">
          <p>React</p>
          <p>Sass</p>
          <p>Html</p>
          <p>Javascript</p>
          <p>Responsive</p>
          <p className="backend">MySQL</p>
          <p className="backend">Express</p>
          <p className="backend">Node.js</p>
        </div>
      </div>
    </>
  );
};

export default Groupomania;

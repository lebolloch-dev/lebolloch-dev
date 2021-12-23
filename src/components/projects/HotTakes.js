import React from "react";

const HotTakes = () => {
  return (
    <>
      <div className="detail-client">
        <h3>Hot Takes</h3>
        <h4>Back-end web development</h4>
        <h5>Date: 2021</h5>
      </div>
      <div className="representation-site"></div>
      <div className="desciption-siteWeb">
        <a
          href="https://github.com/lebolloch-dev/GuillaumeLebolloch_6_16092021"
          rel="noopener noreferrer"
          target="_blank"
          title="Groupomania"
          className="button-A"
        >
          <span></span>
          <h4>View code</h4>
        </a>
        <div className="language">
          <p className="backend">Javascript</p>
          <p className="backend">Mongo DB</p>
          <p className="backend">Express</p>
          <p className="backend">Node.js</p>
        </div>
      </div>
    </>
  );
};

export default HotTakes;

import React from "react";

const Skills = () => {
  return (
    <main className="main-skills">
      <section className="skills">
        <h2>Skills</h2>
        <div className="language">
          <div className="front-end">
            <h3>Front-end</h3>
            <div className="front html">
              <h4>HTML</h4>
            </div>
            <div className="front sass">
              <h4>SASS / CSS</h4>
            </div>
            <div className="front js">
              <h4>JavaScript</h4>
            </div>
            <div className="front react">
              <h4>React</h4>
            </div>
          </div>
          <div className="back-end">
            <h3>Back-end</h3>
            <div className="back node">
              <h4>Node.js</h4>
            </div>
            <div className="back express">
              <h4>Express.js</h4>
            </div>
            <div className="back mongoose">
              <h4>MongoDB</h4>
            </div>
            <div className="back sql">
              <h4>MySQL</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;

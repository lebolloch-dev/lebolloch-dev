import React from "react";
import Contact from "../components/Contact";
import Pdf from "../CV/LE_BOLLOCH_Guillaume_CV.pdf";

const About = () => {
  return (
    <main className="main-about">
      <section className="about">
        <h2>About</h2>
        <div className="about-info">
          <article>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias deserunt id iste voluptatibus eius, nihil asperiores
              atque dolores enim voluptatem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              nihil.
            </p>

            <a
              href={Pdf}
              without
              rel="noopener noreferrer"
              target="_blank"
              title="CV"
              className="button-A"
            >
              <span></span>
              <h4>Download C.V</h4>
            </a>
            {/* <Contact /> */}
            <div className="reseaux-sociaux">
              <ul className="ul-mobile">
                <li>
                  <a
                    href="https://www.linkedin.com/in/guillaume-le-bolloch/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lebolloch-dev"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="GitHub"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lebolloch_dev/"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <img src={process.env.PUBLIC_URL + "/img/logo/photo-id.png"} alt="" />
        </div>
      </section>
    </main>
  );
};

export default About;

import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Cursor = () => {
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const circleSvg = document.querySelector("svg");

    window.addEventListener("mousemove", (event) => {
      mouseY = event.clientY / 16 - 35 / 16 + "rem";
      mouseX = event.clientX / 16 - 35 / 16 + "rem";
    });

    const mouseMove = () => {
      circleSvg.style.top = mouseY;
      circleSvg.style.left = mouseX;

      window.requestAnimationFrame(mouseMove);
    };

    mouseMove();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xml:lang="en"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
    >
      <title>Circular Text Path</title>

      <defs>
        <path
          id="textcircle"
          d="M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
          transform="rotate(12,250,250)"
        />
      </defs>
      <rect width="100%" height="100%" fill="none" />
      <text>
        <textPath
          xlinkHref="#textcircle"
          aria-label="All for One &amp; One for All"
          textLength="942"
        >
          Web Developer .{" "}
        </textPath>
      </text>
    </svg>
  );
};

export default Cursor;

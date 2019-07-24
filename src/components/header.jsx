import React from "react";
import Tilt from "react-tilt";

export default () => (
  <header class="section-header">
    <div class="header">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }}
      >
          <h1 class="header__heading">Himanshu</h1>
          <p class="header__para">Android and Web Developer</p>
      </Tilt>
   
   
    </div>
  </header>
);

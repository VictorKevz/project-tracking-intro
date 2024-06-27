import React from "react";
import devices from "../assets/images/illustration-devices.svg";
import "./css/hero.css"
function Hero() {
  return (
    <section className="hero-container">
      <figure className="item image">
        <img src={devices} alt="illustration-devices" className="hero-img" />
      </figure>

      <div className="item text">
        <div className="text-top-container">
          <a className="new-link">New</a>
          <span className="call-to-action">MONOGRAPH DASHBOARD</span>
        </div>
        <h1 className="hero-title">POWERFUL INSIGHTS<br/> INTO YOUR TEAM</h1>
        <p>Project planning and time tracking<br/> for agile teams</p>
        <div className="text-bottom-container">
          <a className="demo-link">SCHEDULE A DEMO</a>
          <span className="call-to-action bottom">TO SEE A PREVIEW</span>
        </div>
      </div>
    </section>
  );
}
export default Hero;

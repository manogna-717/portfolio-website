import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png.png";

const About = () => {
  return (
    <section id="About" className="About">
      <span className="Abouttitle">About Me</span>

      <div className="aboutContent">
        <img src={aboutImg} alt="About" className="aboutImg" />

        <span className="AboutDesc">
          I'm R. Manogna, a passionate full-stack developer with a background in
          Information Technology from B V Raju Institute of Technology. I have
          strong expertise in web development technologies, including React.
          <br /><br />
          I enjoy building efficient and scalable applications that deliver
          seamless user experiences.I enjoy building efficient and scalable applications that deliver seamless user experiences.<br /><br /> From crafting intuitive front-end interfaces to optimizing complex back-end systems, I take pride in developing solutions that solve real-world problems. I am always eager to embrace new challenges and continuously enhance my skills to create impactful digital experiences.
        </span>
      </div>
    </section>
  );
};

export default About;


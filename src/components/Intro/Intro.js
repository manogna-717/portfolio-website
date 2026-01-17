import React from "react";
import "./intro.css";
import bg from "../../assets/image3.png.jpeg";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="home" className="intro">
      <div className="introContainer">
        <span className="hello">Hello,</span>

        <span className="introText">
          I'm <span className="introName">Manogna</span> <br />
          Full Stack Developer
        </span>

        <p className="introPara">
          As a passionate aspiring full stack developer, I bring a growing
          foundation in both frontend and backend technologies to build complete
          web applications. I have hands-on experience working with both
          technologies. I am committed to writing clean, scalable code and
          continuously learning new tools to improve user experience and
          application performance.
        </p>

        {/* ✅ FIXED HIRE ME BUTTON */}
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
        >
          <button className="btn">
            <img src={btnImg} alt="Hire Me" /> Hire Me
          </button>
        </Link>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

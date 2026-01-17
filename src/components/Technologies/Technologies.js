import React from "react";
import "./technologies.css";
import {
  FaReact,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

const Technologies = () => {
  return (
    <section id="Technologies">
      <h2 className="techTitle">Technologies</h2>

      <div className="techGrid">
        <div className="techCard"><FaReact /><span>React</span></div>
        <div className="techCard"><FaJsSquare /><span>JavaScript</span></div>
        <div className="techCard"><FaJava /><span>Java</span></div>
        <div className="techCard"><FaPython /><span>Python</span></div>
        <div className="techCard"><FaHtml5 /><span>HTML</span></div>
        <div className="techCard"><FaCss3Alt /><span>CSS</span></div>
      </div>
    </section>
  );
};

export default Technologies;

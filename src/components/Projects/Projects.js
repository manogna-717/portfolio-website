import "./Projects.css";
import auditoriaImg from "../../assets/auditoria.jpeg";
import portfolioImg from "../../assets/myportfolio.webp";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="portfolio" className="projects">
      <h2 className="projectsTitle">Projects</h2>

      {/* PROJECT 1 */}
      <div className="projectCard">
        <img src={auditoriaImg} alt="Auditoria Website" />

        <div className="projectContent">
          <h3>
            Auditoria Website{" "}
            <a href="https://auditoria.com" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </h3>

          <p>
            Auditoria is a web-based audit management system that allows admins to create and manage audit-related data while users can track bookings and audit statuses in real time. The platform provides a responsive user interface, secure data storage, and efficient deployment using cloud services.
          </p>

          <div className="techStack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Firebase</span>
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="projectCard">
        <img src={portfolioImg} alt="Portfolio Website" />

        <div className="projectContent">
          <h3>
            Personal Portfolio{" "}
            <a href="https://your-portfolio-link.vercel.app" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </h3>

          <p>
            A  modern and responsive personal portfolio website built using React to showcase my skills, projects, and technologies. The application follows a component-based architecture for better scalability and reusability, with a clean UI and smooth navigation across sections.
          </p>

          <div className="techStack">
            <span>HTML</span>
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

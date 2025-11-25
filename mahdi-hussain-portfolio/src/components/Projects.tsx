import { useEffect } from "react";
import styles from "../../public/Projects.module.css";
import ProjectCard from "./ProjectCard";
import EventQibla from "../../public/EventQibla.png";
import Dissertation from '../../public/Dissertation_mh660.pdf';
import Portfolio from '../../public/Portfolio.png';

const Projects: React.FC = () => {

  // Scroll reveal effect
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.scrollReveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "EventQibla",
      description:
        "A ticketing and marketing platform tailored for Islamic community events across the UK. Built with React, Node.js, and PostgreSQL.",
      tech: ["TypeScript", "React", "Vite", "Node.js", "PostgreSQL", "Postman", "API"],
      liveDemo: "#",
      repository: "#",
      documentation: Dissertation, 
      image: EventQibla,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and modern CSS to showcase projects and experience.",
      tech: ["TypeScript", "React", "Vite", "CSS Modules"],
      liveDemo: "#",
      repository: "#",
      image: Portfolio,
    },
  ];

  return (
    <section
      id="projects"
      className={`${styles.projectsSection} ${styles.scrollReveal}`}
    >
      <h1 className={`${styles.title} ${styles.scrollReveal}`}>My Projects</h1>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.scrollReveal}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

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
      description: `A modern event platform built for Islamic community organisers, featuring ticket sales, event management, and secure QR-based ticketing. Developed with React, Node.js, Express, and PostgreSQL.
      
      This project achieved a first-class grade as part of my dissertation, which is included in the documentation.`,

      tech: ["TypeScript", "Node.js", "Express.js", "React", "PostgreSQL", "Postman", "Vite", "REST"],
      liveDemo: "https://eventqibla.netlify.app/",
      repository: "https://github.com/mh1803/EventQibla",
      documentation: Dissertation, 
      image: EventQibla,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and modern CSS to showcase projects and experience.",
      tech: ["TypeScript", "React", "Vite", "CSS"],
      liveDemo: "/",
      repository: "https://github.com/mh1803/Portfolio/tree/main",
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

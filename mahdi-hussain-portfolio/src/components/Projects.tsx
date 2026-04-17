import { useEffect } from "react";
import styles from "../../public/Projects.module.css";
import ProjectCard from "./ProjectCard";
import EventQibla from "../../public/EventQibla.png";
import SpendBee from "../../public/SpendBee.png";
import Dissertation from "../../public/Dissertation_mh660.pdf";
import Portfolio from "../../public/Portfolio.png";
import MMS from "../../public/MMS.png";
import PurleyWasl from "../../public/PurleyWasl.png";

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
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Purley Wasl",
      description: `A freelance-built digital community platform for Muslim businesses and services in Purley, currently in active development, enabling users to discover listings and submit applications, with an admin dashboard for moderation.

Led end-to-end development as the sole developer, designing and building a full-stack system using React, TypeScript, Vite, and a Python FastAPI backend with PostgreSQL and SQLAlchemy. Implemented JWT authentication and backend APIs for listing and application workflows.

Tested backend services using pytest with HTTP client testing (httpx/TestClient), and managed dependencies using uv and pip. Built with a focus on scalability, maintainability, and real-world community use.`,

      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "pytest",
        "httpx",
        "TypeScript",
        "React",
        "Vite",
        "JWT",
        "REST",
        "Codex",
        "Claude Code",
      ],
      liveDemo: "https://purleywasl.co.uk",
      image: PurleyWasl,
    },
    {
      title: "Merchant Management System",
      description: `A production-style backend CRM for merchant onboarding, KYB verification, and lifecycle management. The system enforces real-world business rules, including status transitions, document verification requirements, and role-based admin controls.

  Built with TypeScript, Node.js, Express, and PostgreSQL, with secure JWT authentication. Developed in 72 hours using Codex, and supported by comprehensive unit and integration testing with Jest and Supertest to ensure reliability.

  Features immutable audit history, operator lockout protection, and signed webhook delivery with retry handling to enable real-time updates and integration with external services.`,

      tech: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
        "Zod",
        "Jest",
        "Supertest",
        "REST",
        "Codex",
      ],
      repository: "https://github.com/mh1803/Merchant-Management-System",
      image: MMS,
    },
    {
      title: "SpendBee",
      description: `An AI-powered bank statement analyser that helps users understand their spending through automated categorisation and clear financial insights.

Built with React, TypeScript, Node.js, and Express, powered by OpenAI. Designed CI/CD workflows with GitHub Actions to automate build validation and ESLint checks, with continuous deployment to Netlify and Railway.

Implemented headless end-to-end testing using Playwright within the CI/CD pipeline to ensure reliability and prevent regressions.`,

      tech: [
        "OpenAI",
        "TypeScript",
        "Node.js",
        "Express.js",
        "React",
        "Vite",
        "REST",
        "ESLint",
        "Playwright",
        "GitHub Actions",
      ],
      liveDemo: "https://spend-bee.netlify.app/",
      repository: "https://github.com/mh1803/SpendBee",
      image: SpendBee,
    },
    {
      title: "Event Qibla",
      description: `A modern event platform built for Islamic community organisers, featuring ticket sales, event management, and secure QR-based ticketing. Developed with React, Node.js, Express, and PostgreSQL.
      
      This project achieved a first-class grade as part of my dissertation, which is included in the documentation.`,

      tech: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "React",
        "PostgreSQL",
        "Postman",
        "Vite",
        "REST",
      ],
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
    <section id="projects" className={styles.projectsSection}>
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

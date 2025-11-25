import React from 'react'
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi'
import styles from '../../public/Projects.module.css'

import placeholderImage from '../../public/EventQibla.png'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  liveDemo?: string
  repository?: string
  documentation?: string
  image?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  liveDemo,
  repository,
  documentation,
  image
}) => {
  return (
    <div className={styles.projectCard}>

      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={image || placeholderImage}
          alt={title}
          className={styles.projectImage}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{title}</h2>

        <ul className={styles.techList}>
          {tech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className={styles.projectDescription}>{description}</p>

        {/* BUTTONS */}
        <div className={styles.buttonRow}>
          {liveDemo && (
            <a
              href={liveDemo}
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={18} style={{ marginRight: '8px' }} />
              Live Demo
            </a>
          )}

          {repository && (
            <a
              href={repository}
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={18} style={{ marginRight: '8px' }} />
              Repository
            </a>
          )}

          {documentation && (
            <a
              href={documentation}
              className={styles.projectButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFileText size={18} style={{ marginRight: '8px' }} />
              Documentation
            </a>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard

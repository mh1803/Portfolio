import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../../public/About.module.css";
import logo from "../../public/logo.png";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(`.${styles.animateOnScroll}`)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" className={`${styles.aboutSection} ${styles.animateOnScroll}`}>
        <div className={`${styles.aboutSectionInner} ${styles.animateOnScroll}`}>
          {/* Left: About info */}
          <div className={`${styles.aboutInfo} ${styles.animateOnScroll}`}>
            <h1 className={`${styles.title} ${styles.animateOnScroll}`}>Who Am I?</h1>
            <p className={`${styles.description} ${styles.animateOnScroll}`}>
              My name is <strong>Mahdi Hussain</strong>, and I'm a 22 years old software developer based in <strong>London</strong>.
              My passion for technology began at a young age and has guided my academic journey - from studying Computer Science in secondary school and sixth form,
              all the way through to higher education.
              <br />
              <br />
              I graduated with a <strong>First-Class BSc in Computer Science</strong> from the University of Leicester.
              I've gained hands-on experience building <strong>full-stack applications</strong> and am committed to growing as a dedicated and resilient Software Engineer.
              <br />
              <br />
              My goal is to become a capable, reliable, and impactful developer who contributes meaningfully to the teams and projects I work on.
            </p>

            <div className={`${styles.buttonContainer} ${styles.animateOnScroll}`}>
              <a
                href="https://www.linkedin.com/in/mahdi-hussain-049889252/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tileButton}
              >
                <FaLinkedin className={styles.icon} />
                Connect with me
              </a>

              <a
                href="https://github.com/mh1803"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tileButton}
              >
                <FaGithub className={styles.icon} />
                Check my GitHub
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className={`${styles.logoContainer} ${styles.animateOnScroll}`}>
            <img src={logo} alt="Mahdi Hussain Logo" className={styles.logoImage} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

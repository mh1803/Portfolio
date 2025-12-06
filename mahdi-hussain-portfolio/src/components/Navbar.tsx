import { useEffect, useState } from "react";
import styles from "../../public/Navbar.module.css";
import logo from "../../public/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <a href="#home">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>

      {/* RIGHT SIDE */}
      <ul className={`${styles.right}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

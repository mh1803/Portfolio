import styles from "../../public/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Mahdi Hussain. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

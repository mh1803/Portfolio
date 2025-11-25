import styles from '../../public/Hero.module.css'
import { FaEye } from "react-icons/fa";
import CV from '../../public/Mahdi_Hussain_CV_2025.pdf';



function Hero(){
    return(
    
    <div id="home" className={styles["hero-section"]}>
        
        
        <div className={styles.stars}></div>
        <div className={styles["shooting-star"]}></div>
        <div className={styles["shooting-star"]}></div>
        <div className={styles["shooting-star"]}></div>
        <div className={styles["shooting-star"]}></div>
        <div className={styles["shooting-star"]}></div>

        <div className={styles.greeting}>
            <h1>Hi, I'm <span className={styles.glow}>Mahdi</span>.</h1>
            <h2>Junior Software Developer</h2>
            <a 
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvButton}
            >
            View my CV
            <FaEye className={styles.eyeIcon} />
            </a>
        </div>



    </div>)
}

export default Hero;
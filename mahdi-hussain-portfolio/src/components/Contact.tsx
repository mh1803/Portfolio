import { useState, useEffect, useRef } from "react";
import styles from "../../public/Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const data = {
      access_key: import.meta.env.VITE_WEB3_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  // Refs for scroll reveal
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      `.${styles.scrollReveal}`
    );
    if (!elements) return;

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

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="contact" ref={sectionRef} className={styles.contactSection}>
      <form
        className={`${styles.contactForm} ${styles.scrollReveal}`}
        onSubmit={handleSubmit}
      >
        <h2 className={`${styles.contactTitle} ${styles.scrollReveal}`}>
          Contact Me
        </h2>

        <div className={`${styles.formGroup} ${styles.scrollReveal}`}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formGroup} ${styles.scrollReveal}`}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formGroup} ${styles.scrollReveal}`}>
          <label>Message</label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`${styles.submitButton} ${styles.scrollReveal}`}
        >
          Send Message
        </button>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
}

export default Contact;

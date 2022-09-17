import styles from "../styles/Footer.module.scss";
import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Indian Garden</span>
          <span className={styles.copyright}>
            © Copyright Food. All rights reserved
          </span>
        </div>

        <ul>

          <li className={styles.socialsContainer}>
            Get in Touch
            <ul className={styles.socials}>
              <li>
                <a href=""><FaFacebook/></a>
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import menu from "../assets/menu.pdf"


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <a href="/"><span className={styles.logo}>Indian Garden</span></a>
      </div>

      <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
        <FaBars />
      </div>

      <ul
        className={`${navOpen ? styles.menuMobileActive : undefined} ${
          styles.menu
        }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
          <FaTimes />
        </li>
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href={menu} donnload target="_blank">Our Menu</a></li>
        <li><a href="#contact">Contact Us</a></li>




      </ul>
    </nav>
  );
};

export default Navbar;

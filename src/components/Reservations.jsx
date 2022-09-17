import styles from "../styles/Reservations.module.scss";
import restaurant from "../assets/restaurant.jpg";

import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Reservations = () => {
  return (
    <>
    <div id="contact"></div>
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* LEFT CONTAINER */}
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>Contact Us</h1>
              <h2><a>00351 924359698</a></h2>
              <h3><a>Indiangarden27@gmail.com</a></h3>


              <h3><a>View Map</a></h3>

            </div>

          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className={styles.rightContainer}>
          <div className={styles.formContainer}>
            <form action="">
              <div className={styles.imgContainer}>
              </div>
              <div className={styles.formInner}>     
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Reservations;

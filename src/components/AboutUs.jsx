import styles from "../styles/AboutUs.module.scss";
import restaurant from "../assets/restaurant.jpg";

const AboutUs = () => {
  return (
    <>
    <div id="about"></div>
    <div className={styles.container} >
      <div className={styles.bg1}>
        <img src={restaurant} alt="bg1" />
      </div>
      <div className={styles.restaurant}>
        <img src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>We always Server You Better</h3>
          <p>
            The best Indian Resturant in Porto run by Chef Michelin star 20 experience in Indian continental food.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

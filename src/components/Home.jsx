import Navbar from "./Navbar";
import styles from "../styles/Home.module.scss";
import { BsArrowRight } from "react-icons/bs";
import eating from "../assets/eating.jpg";

const Home = () => {
  return (
    <div className={styles.home} id="main">
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.bg1}>
        <div className={styles.photo1}>
          <div className={styles.photoContainer}>
            <img src={eating} alt="eating" />
          </div>
        </div>
      </div>
      <div className={styles.slogan}>
        <h1>{`RESTURANTE INDIAN GARDEN `}</h1>
        <p>
          Your Favourite Indian Resturant.
        </p>
        <a href="#home">
        <button className={styles.btn}>
          <span>See More</span>
          <BsArrowRight />
        </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

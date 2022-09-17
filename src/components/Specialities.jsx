import styles from "../styles/Specialities.module.scss";
import ChickenTikka from "../assets/dishes/chickentikka.jfif";
import Momo from "../assets/dishes/momo.jfif";
import Samosa from "../assets/dishes/samosa.jpg";
import GulabJamun from "../assets/dishes/gulabjamun.jfif";




const FoodCard = ({ foodIcon, ctg, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}><img src={foodIcon} alt="" /></div>
      <h2>{ctg}</h2>
      <p>{description}</p>
    </div>
  );
};

const Specialities = () => {
  return (
    <div className={styles.container} id="home">
      <div className={styles.title}>
        <h1>Speacialities</h1>
        <h2>Our Special Cuisine</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.row1}>
          <FoodCard
            foodIcon={ChickenTikka}
            ctg="Chicken Tikka Masala"
            description="12.90€"
          />
          <FoodCard
            foodIcon={Momo}
            ctg="Momo"
            description="7€"
          />
        </div>

        <div className={styles.row1}>
          <FoodCard
            foodIcon={Samosa}
            ctg="Samosa"
            description="4€"
          />

          <FoodCard
            foodIcon={GulabJamun}
            ctg="Gulab Jamun"
            description="5€"
          />
        </div>
      </div>
    </div>
  );
};

export default Specialities;

import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Sweet 'n Spice Crafting pizza perfection with a fusion of sweetness and spice, redefining every slice into a culinary masterpiece.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Locate Our Dining Spots</h1>
          <p className={styles.text}>
          456 Oak Street #304.
            <br /> Willow Springs,CA, 24253
            <br /> (403) 123-4356
          </p>
          <p className={styles.text}>
          789 Maple Avenue #235.
            <br /> Pineville, 88622
            <br /> (342) 563-2011
          </p>
          <p className={styles.text}>
            1314 David Road St #234.
            <br /> NewYork, 82323
            <br /> (235) 535-1334
          </p>
          <p className={styles.text}>
            1614 W. king St #1875.
            <br /> Atlanta, 85022
            <br /> (534) 123-1535
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 – 20:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 1:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

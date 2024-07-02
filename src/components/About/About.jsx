import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { LuSyringe } from "react-icons/lu";
import { BsCapsule } from "react-icons/bs";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <LuSyringe size={200} className={styles.icons}></LuSyringe>
            <div className={styles.aboutItemText}>
              <p>
                My education journey has been enriched by hand's on experiences in clinical settings,
                where i have honed my skill in communication, team work, leadership, problem solving. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <BsCapsule size={200} className={styles.icons}></BsCapsule>
            <div className={styles.aboutItemText}>
              <p>
                My goal is to become a pharmacist, specializing in oncology, where i can directly impact patients life by optimizing therapeutic outcomes and providing comprehensive medication adherence.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <LuSyringe size={200} className={styles.icons}></LuSyringe>
            <div className={styles.aboutItemText}>
              <p>
                I strive to make a meaningful diffrence in healthcare, ensuring that every patient receive the highest standard of pharmaceutical care. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

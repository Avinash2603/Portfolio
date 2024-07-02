import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.subskills}>
            <h3 className={styles.subtitle}>Pharmaeutical skills:</h3>
            <ul className={styles.list}>
              <li>Regulatory Requirment For New Drug Approval</li>
              <li>Medication Thearpy Managment</li>
              <li>Medication adherance</li>
              <li>Pharmacodynanic and Pharmacokinetic</li>
              <li>Compounding Of Medicines</li>
            </ul>
          </div>
          <div className={styles.subskills}>
            <h3 className={styles.subtitle}>Technical skills:</h3>
            <ul className={styles.list}>
              <li>High Performance Liquid Chromatography</li>
              <li>High Performance Thin Liquid Chromatography</li>
              <li>UV Spectroscopy</li>
              <li>Flourimetry</li>
              <li>Sonicator</li>
              <li>Machine's Used In Tablet Manufacturing</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

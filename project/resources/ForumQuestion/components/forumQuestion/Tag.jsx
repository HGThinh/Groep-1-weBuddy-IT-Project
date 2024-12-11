import React from "react";
import styles from "./Tag.module.css";

export const Tag = ({ text, className }) => (
  <div className={`${styles.tag} ${className}`}>
    <div className={styles.tagContent}>{text}</div>
  </div>
);

export const StatusTag = ({ icon, text }) => (
  <div className={styles.statusTag}>
    <div className={styles.statusContent}>
      <img loading="lazy" src={icon} className={styles.statusIcon} alt="" />
      <div>{text}</div>
    </div>
  </div>
);

import React from "react";
import styles from "./ForumQuestion.module.css";

const ActionButton = ({ icon, text, count }) => (
  <div className={styles.actionGroup}>
    <img loading="lazy" src={icon} className={styles.actionIcon} alt="" />
    <div className={styles.actionText}>{count || text}</div>
  </div>
);

export default ActionButton;

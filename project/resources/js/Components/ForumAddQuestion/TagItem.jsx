import React from "react";
import styles from "./QuestionForm.module.css";

export function TagItem({ label, icon }) {
  return (
    <div className={styles.tagItem}>
      <div>{label}</div>
      {icon && (
        <div className={styles.iconWrapper}>
          <img loading="lazy" src={icon} className={styles.icon} alt="" />
        </div>
      )}
    </div>
  );
}

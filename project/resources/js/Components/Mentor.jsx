import React from "react";
import styles from "./Mentor.module.css";

const Mentor = ({ name, points, role, tags, description }) => {
    return (
        <div className={styles.Mentor}>
            <div className={styles.containerImg}>
                <img
                    src="/Images/UserProfileNoPic.png"
                    alt={`${name}'s profile`}
                />
            </div>
            <div>
                <h2>
                    {name} | {points} points
                </h2>
                <ul className={styles.tags}>
                    <li className={styles.role}>{role}</li>
                    {tags.map((tag, index) => (
                        <li className={styles.tag} key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>

                <p>{description}</p>
            </div>
        </div>
    );
};

export default Mentor;

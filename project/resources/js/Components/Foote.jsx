import React from "react";
import styles from "./Foote.module.css";

const Foote = () => {
    return (
        <ul className={styles.footerstyle}>
            <li>
                <img src="Images/weBuddy.png" alt="" />
                <h3>IT project - Group 1</h3>
            </li>
            <li>
                <ul>
                    <li>
                        <a href="#home">Forum</a>
                    </li>

                    <li>
                        <a href="#about">Resources</a>
                    </li>

                    <li>
                        <a href="#contact">Mentors</a>
                    </li>

                    <li>
                        <a href="#contact">Profile</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Foote;

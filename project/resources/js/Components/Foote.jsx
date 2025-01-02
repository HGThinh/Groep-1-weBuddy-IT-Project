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
                        <a href={route('forum.get')}>Forum</a>
                    </li>

                    <li>
                        <a href={route('resources.get')}>Resources</a>
                    </li>

                    <li>
                        <a href={route('mentor.get')}>Mentors</a>
                    </li>
                    <li>
                        <a href={route('aboutus.get')}>About Us</a>
                    </li>
                    <li>
                        <a href={route('profile.edit')}>Profile</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Foote;

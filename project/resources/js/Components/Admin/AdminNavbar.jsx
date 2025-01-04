import React from "react";
import styles from "./AdminNavbar.module.css";

const Foote = () => {
    return (
        <ul className={styles.AdminNavbar}>
            <li>
                <h1>Admin Panel</h1>
            </li>
            <li>
                <ul>
                    <li>
                        <a href={route("forum.get")}>Forum</a>
                    </li>

                    <li>
                        <a href={route("resources.get")}>Resources</a>
                    </li>

                    <li>
                        <a href={route("mentor.get")}>Mentors</a>
                    </li>
                    <li>
                        <a href={route("aboutus.get")}>About Us</a>
                    </li>
                    <li>
                        <a href={route("profile.edit")}>Profile</a>
                    </li>
                </ul>
            </li>
            <br />
            <li>
                <img src="Images/weBuddy.png" alt="" />
            </li>
        </ul>
    );
};

export default Foote;

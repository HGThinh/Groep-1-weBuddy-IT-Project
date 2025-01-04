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
                        <a href={route("forum.get")}>Programs</a>
                    </li>

                    <li>
                        <a href={route("resources.get")}>Users</a>
                    </li>

                    <li>
                        <a href={route("mentor.get")}>Reports</a>
                    </li>
                    <li>
                        <a href={route("aboutus.get")}>Applications</a>
                    </li>
                </ul>
            </li>

            <li>
                <img src="Images/weBuddy.png" alt="" />
            </li>
            <br />
        </ul>
    );
};

export default Foote;

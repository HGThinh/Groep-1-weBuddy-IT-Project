import React, { useRef } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ items }) => {
    const coursesRef = useRef(null);

    const scrollCourses = (direction) => {
        if (coursesRef.current) {
            const scrollAmount = 200; // Adjust scroll distance
            coursesRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className={styles.navbar}>
                <img src="/Images/weBuddy.png" alt="WeBuddy Logo" />
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
                        <a className={styles.icon} href="#profile">
                            <img
                                src="/Images/iconprofile.png"
                                alt="Profile Icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.coursesContainer}>
                <button
                    className={styles.arrowButton}
                    onClick={() => scrollCourses("left")}
                >
                    &lt;
                </button>
                <div className={styles.Courses} ref={coursesRef}>
                    <ul>
                        {items.map((course, index) => (
                            <li key={index}>
                                <a href={`linktothecourse/${course}`}>
                                    {course}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className={styles.arrowButton}
                    onClick={() => scrollCourses("right")}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Navbar;

import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const coursesRef = useRef(null);
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("/api/courses")
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setError("Unable to load courses.");
            });
    }, []);

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
                        <a className={styles.icon} href={route("profile.edit")}>
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
                        {error ? (
                            <li>{error}</li>
                        ) : (
                            courses.map((course) => (
                                <li key={course.course_id}>
                                    <a href={`/course/${course.course_id}`}>
                                        {course.course}
                                    </a>
                                </li>
                            ))
                        )}
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

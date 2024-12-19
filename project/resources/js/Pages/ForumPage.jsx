import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Question from "@/Components/QuestionForum";
import styles from "@/Components/Forum.module.css";

import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const questions = [
        {
            Name: "Mariana Z",
            ProfilePicture: "/path/to/image.png",
            TimePosted: "35 minutes",
            Catgeory: "Programming Essentials",
            QuestionTitle: "How to use React Hooks effectively?",
            BoolAnswered: true,
            tags: ["React", "Hooks", "JavaScript"],
            Question:
                "I'm struggling with understanding useState and useEffect. Can someone explain?",
            upvotes: 45,
            comments: 15,
        },
    ];
    const [value, setValue] = useState(0);

    const courses = [
        "Programming Essentials I",
        "Network Essentials",
        "IT Essentials",
        "Desktop OS",
        "Web Essentials",
        "Study Life",
    ];

    const types = ["Discussion", "Explanation", "Study Resources", "Review"];
    const periods = [
        "Today",
        "Last Week",
        "Last Month",
        "Last Semester",
        "Last Year",
    ];
    const statuses = ["Answered", "In Progress", "No Answers"];
    const verifications = ["Verified", "Unverified"];

    return (
        <>
            <Navbar items={courses} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <a href="#" className={styles.headerSection}>
                        <span>+</span>
                        <h2 className={styles.headerTitle}>Ask a question</h2>
                    </a>

                    <h3 className={styles.sectionTitle}>Filter by</h3>
                    <h4 className={styles.filterTitle}>Type</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.labelText}>Tutor</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.labelText}>Student</span>
                        </label>
                    </div>
                    <h4 className={styles.filterTitle}>Language</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.labelText}>Dutch</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.labelText}>English</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.labelText}>French</span>
                        </label>
                    </div>
                    <h4 className={styles.filterTitle}>Location</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="location"
                                className={styles.radio}
                            />
                            <span className={styles.labelText}>Live</span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="location"
                                className={styles.radio}
                            />
                            <span className={styles.labelText}>Online</span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="location"
                                className={styles.radio}
                            />
                            <span className={styles.labelText}>Both</span>
                        </label>
                    </div>
                    <h4 className={styles.filterTitle}>Max Rate Per Hour</h4>
                    <div className={styles.filterGroup}>
                        <div className={styles.rangeContainer}>
                            <span className={styles.rangeLabel}>€0</span>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className={styles.rangeInput}
                            />
                            <span className={styles.rangeLabel}>€{value}</span>
                        </div>
                    </div>
                </div>
                ;
                <div className={styles.content}>
                    <Question data={questions} />
                </div>
            </div>
        </>
    );
}

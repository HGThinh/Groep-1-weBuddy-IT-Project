import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Mentor from "@/Components/Mentor";
import styles from "@/Components/Mentorpage.module.css";
import Foote from "@/Components/Foote";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    //route
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    const mentorData = {
        name: "John Doe",
        points: 250,
        role: "Buddy",
        tags: ["React", "JavaScript", "CSS"],
        description:
            "John is an experienced developer specializing in front-end technologies.",
    };
    const courses = [
        "Programming Essentials 1",
        "Advanced React",
        "Web Development Basics",
        "Web essentials",
        "IT essentials",
        "Network essentials",
        "Programming essentials 2",
        "Data Essentials",
        "Desktop OS",
        "Italent 1",
        "Software Design essentials"
    ];

    const [value, setValue] = useState(0);

    return (
        <>
            <Navbar items={courses} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <a href="#" className={styles.headerSection}>
                        <span>+</span>
                        <h2 className={styles.headerTitle}>Become a mentor</h2>
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
                <div>
                    <Mentor
                        name={mentorData.name}
                        points={mentorData.points}
                        role={mentorData.role}
                        tags={mentorData.tags}
                        description={mentorData.description}
                    ></Mentor>
                    <Mentor
                        name={mentorData.name}
                        points={mentorData.points}
                        role={mentorData.role}
                        tags={mentorData.tags}
                        description={mentorData.description}
                    ></Mentor>
                </div>
            </div>
            <Foote />
        </>
    );
}

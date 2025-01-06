import { useState, useEffect } from "react";
import Mentor from "@/Components/Mentor";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import styles from "@/Components/Mentorpage.module.css";

export default function Welcome({ mentors }) {
    const [mentorList, setMentorList] = useState(mentors);
    const [value, setValue] = useState(0);
    const [selectedFilters, setSelectedFilters] = useState({
        role: [],
        language: [],
        location: "",
        maxRate: 15, // default max rate
    });

    useEffect(() => {
        setMentorList(mentors);
    }, [mentors]);

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

    // Function to filter mentors based on the selected filters
    const filterMentors = () => {
        return mentorList.filter((mentor) => {
            const isRoleValid =
                selectedFilters.role.length === 0 ||
                selectedFilters.role.includes(mentor.role);
            const isLanguageValid =
                selectedFilters.language.length === 0 ||
                mentor.languages?.some((language) =>
                    selectedFilters.language.includes(language)
                );
            const isLocationValid =
                selectedFilters.location === "" ||
                mentor.location === selectedFilters.location ||
                selectedFilters.location === "Both"; // Assuming mentor location can be "Live", "Online", or "Both"
            const isRateValid = mentor.rate <= selectedFilters.maxRate;

            return isRoleValid && isLanguageValid && isLocationValid && isRateValid;
        });
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

    return (
        <>
            <Navbar items={courses} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <a href={route('mentor.request')} className={styles.headerSection}>
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
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        role: prev.role.includes("Tutor")
                                            ? prev.role.filter((r) => r !== "Tutor")
                                            : [...prev.role, "Tutor"],
                                    }))
                                }
                            />
                            <span className={styles.labelText}>Tutor</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        role: prev.role.includes("Student")
                                            ? prev.role.filter((r) => r !== "Student")
                                            : [...prev.role, "Student"],
                                    }))
                                }
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
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        language: prev.language.includes("Dutch")
                                            ? prev.language.filter((l) => l !== "Dutch")
                                            : [...prev.language, "Dutch"],
                                    }))
                                }
                            />
                            <span className={styles.labelText}>Dutch</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        language: prev.language.includes("English")
                                            ? prev.language.filter((l) => l !== "English")
                                            : [...prev.language, "English"],
                                    }))
                                }
                            />
                            <span className={styles.labelText}>English</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        language: prev.language.includes("French")
                                            ? prev.language.filter((l) => l !== "French")
                                            : [...prev.language, "French"],
                                    }))
                                }
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
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        location: "Live",
                                    }))
                                }
                            />
                            <span className={styles.labelText}>Live</span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="location"
                                className={styles.radio}
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        location: "Online",
                                    }))
                                }
                            />
                            <span className={styles.labelText}>Online</span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="location"
                                className={styles.radio}
                                onChange={() =>
                                    setSelectedFilters((prev) => ({
                                        ...prev,
                                        location: "Both",
                                    }))
                                }
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
                <div className={styles.mentorListContainer}>
                    {filterMentors().length > 0 ? (
                        filterMentors().map((mentor) => (
                            <div className={styles.mentorCard} key={mentor.id}>
                                <Mentor
                                    name={mentor.name}
                                    points={mentor.points}
                                    role={mentor.role}
                                    tags={mentor.tags}
                                    description={mentor.description}
                                    languages={mentor.languages}
                                    location={mentor.location}
                                    bio={mentor.bio}
                                    motivation_letter={mentor.motivation_letter}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No mentors available.</p>
                    )}
                </div>
            </div>
            <Foote />
        </>
    );
}

import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";
import styles from "@/Components/Resource.module.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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

    const courses = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "Programming Essentials 2",
        "IT Essentials",
        "Desktop OS",
        "Network essentials",
    ];
    // courses =/= coursesTagsResource omdat courses alleen de courses die jij hebt , en coursesTagsResource alle tags zijn die een vraag hebben
    const coursesTagsResource = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "Programming Essentials 2",
        "IT Essentials",
        "Desktop OS",
        "Network essentials",
    ];
    const TypeResource = [
        "Notes",
        "Study planning",
        "Summaries",
        "Past Exams",
        "Exercices",
    ];

    //data of the resources (title, description, type, tags)
    const resourcesData = [
        {
            title: "Summary - Chapter 4",
            description:
                "This is a summary of Chapter 4, covering subnetting and basic network concepts.",
            type: "txt",
            tags: ["Network Essentials", "Subnetting", "Dutch"],
        },
        {
            title: "Study Planning - All Chapters",
            description:
                "A complete study plan to prepare for the exams effectively.",
            type: "pdf",
            tags: ["Study Tips", "Planning", "Exams"],
        },
        {
            title: "Notes - Windows Chapters 1 & 2",
            description:
                "Detailed notes covering commands and shortcuts for Windows OS.",
            type: "ppt",
            tags: ["Windows", "Commands", "Shortcuts", "OS"],
        },
        {
            title: "Summary - Chapter 4",
            description:
                "This is a summary of Chapter 4, covering subnetting and basic network concepts.",
            type: "doc",
            tags: ["Network Essentials", "Subnetting", "Dutch"],
        },
        {
            title: "Study Planning - All Chapters",
            description:
                "A complete study plan to prepare for the exams effectively.",
            type: "Notes",
            tags: ["Study Tips", "Planning", "Exams"],
        },
    ];

    return (
        <>
            <Navbar items={courses} />
            <main>
                <div className={styles.ContainerMenor}>
                    <div className={styles.container}>
                        <a href="#" className={styles.headerSection}>
                            <span>+</span>
                            <h2 className={styles.headerTitle}>
                                Upload Resource
                            </h2>
                        </a>

                        <h3 className={styles.sectionTitle}>Filter by</h3>
                        <h4 className={styles.filterTitle}>Courses</h4>
                        <div className={styles.filterGroup}>
                            {coursesTagsResource.map((course, index) => (
                                <label
                                    key={index}
                                    className={styles.checkboxLabel}
                                >
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.labelText}>
                                        {course}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <h4 className={styles.filterTitle}>Type</h4>
                        <div className={styles.filterGroup}>
                            {TypeResource.map((type, index) => (
                                <label
                                    key={index}
                                    className={styles.checkboxLabel}
                                >
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                    />
                                    <span className={styles.labelText}>
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <h4 className={styles.filterTitle}>Preiod</h4>
                        <div className={styles.filterGroup}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="location"
                                    className={styles.radio}
                                />
                                <span className={styles.labelText}>Today</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="location"
                                    className={styles.radio}
                                />
                                <span className={styles.labelText}>
                                    Last Week
                                </span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="location"
                                    className={styles.radio}
                                />
                                <span className={styles.labelText}>
                                    Last Month
                                </span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="location"
                                    className={styles.radio}
                                />
                                <span className={styles.labelText}>
                                    Last Year
                                </span>
                            </label>
                        </div>
                    </div>
                    <ResourceCard items={resourcesData} />
                </div>
            </main>
            <Foote />
        </>
    );
}

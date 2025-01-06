import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";
import styles from "@/Components/Resource.module.css";
import axios from "axios";

export default function Welcome() {
    const [courses, setCourses] = useState([]);
    const [coursesTagsResource, setCoursesTagsResource] = useState([]);
    const [typeResource, setTypeResource] = useState([]);
    const [resourcesData, setResourcesData] = useState([]);

    useEffect(() => {
        // Fetch the data from the Laravel API
        axios.get("/api-resources")
            .then((response) => {
                const { courses, coursesTagsResource, TypeResource, resourcesData } = response.data;
                setCourses(courses);
                setCoursesTagsResource(coursesTagsResource);
                setTypeResource(TypeResource);
                setResourcesData(resourcesData);
            })
            .catch((error) => {
                console.error("Error fetching resources:", error);
            });
    }, []);


    const handleImageError = () => {
        document.getElementById("screenshot-container")?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document.getElementById("docs-card-content")?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Navbar items={courses} />
            <main>
                <div className={styles.ContainerMenor}>
                    <div className={styles.container}>
                        <a href={route('uploadresources.get')} className={styles.headerSection}>
                            <span>+</span>
                            <h2 className={styles.headerTitle}>Upload Resource</h2>
                        </a>

                        <h3 className={styles.sectionTitle}>Filter by</h3>
                        <h4 className={styles.filterTitle}>Courses</h4>
                        <div className={styles.filterGroup}>
                            {coursesTagsResource.map((course, index) => (
                                <label key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    <span className={styles.labelText}>{course}</span>
                                </label>
                            ))}
                        </div>

                        <h4 className={styles.filterTitle}>Type</h4>
                        <div className={styles.filterGroup}>
                            {typeResource.map((type, index) => (
                                <label key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    <span className={styles.labelText}>{type}</span>
                                </label>
                            ))}
                        </div>

                        <h4 className={styles.filterTitle}>Period</h4>
                        <div className={styles.filterGroup}>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="location" className={styles.radio} />
                                <span className={styles.labelText}>Today</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="location" className={styles.radio} />
                                <span className={styles.labelText}>Last Week</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="location" className={styles.radio} />
                                <span className={styles.labelText}>Last Month</span>
                            </label>
                            <label className={styles.radioLabel}>
                                <input type="radio" name="location" className={styles.radio} />
                                <span className={styles.labelText}>Last Year</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.resourceCards}>
                        {resourcesData.map((resource, index) => (
                            <ResourceCard key={index} resource={resource} />
                        ))}
                    </div>
                </div>
            </main>
            <Foote />
        </>
    );
}

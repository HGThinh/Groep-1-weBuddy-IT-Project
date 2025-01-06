import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";
import styles from "@/Components/ResourcePage.module.css";
import axios from "axios";

export default function Welcome() {
    const [coursesTagsResource, setCoursesTagsResource] = useState([]);
    const [typeResource, setTypeResource] = useState([]);
    const [resourcesData, setResourcesData] = useState([]);

    // Filters
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState("");

    useEffect(() => {
        // Fetch the data from the Laravel API
        axios
            .get("/api-resources")
            .then((response) => {
                const {
                    courses,
                    coursesTagsResource,
                    TypeResource,
                    resourcesData,
                } = response.data;

                // Parse, flatten, and clean course tags
                const formattedTags = coursesTagsResource
                    .map((tag) =>
                        typeof tag === "string" ? JSON.parse(tag) : tag
                    )
                    .flat()
                    .filter((tag) => tag && typeof tag === "string"); // Filter out null or invalid tags
                const uniqueTags = [...new Set(formattedTags)];
                const sortedTags = uniqueTags.sort((a, b) =>
                    a.localeCompare(b, undefined, { sensitivity: "base" })
                );
                setCoursesTagsResource(sortedTags);

                setTypeResource(TypeResource);

                // Ensure resource tags are parsed
                const formattedResources = resourcesData.map((resource) => ({
                    ...resource,
                    tags: Array.isArray(resource.tags)
                        ? resource.tags
                        : JSON.parse(resource.tags),
                }));
                setResourcesData(formattedResources);
            })
            .catch((error) => {
                console.error("Error fetching resources:", error);
            });
    }, []);

    const handleTagChange = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag)
                : [...prevTags, tag]
        );
    };

    const handleTypeChange = (type) => {
        setSelectedTypes((prevTypes) =>
            prevTypes.includes(type)
                ? prevTypes.filter((t) => t !== type)
                : [...prevTypes, type]
        );
    };

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
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

    // Filter resources based on selected filters
    const filteredResources = resourcesData.filter((resource) => {
        const tagMatch =
            selectedTags.length === 0 ||
            resource.tags.some((tag) => selectedTags.includes(tag));

        const typeMatch =
            selectedTypes.length === 0 || selectedTypes.includes(resource.type);

        let periodMatch = true;
        if (selectedPeriod) {
            const resourceDate = new Date(resource.date);
            const now = new Date();

            if (selectedPeriod === "Today") {
                periodMatch =
                    resourceDate.toDateString() === now.toDateString();
            } else if (selectedPeriod === "Last Week") {
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
                periodMatch = resourceDate >= oneWeekAgo && resourceDate <= now;
            } else if (selectedPeriod === "Last Month") {
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(now.getMonth() - 1);
                periodMatch =
                    resourceDate >= oneMonthAgo && resourceDate <= now;
            } else if (selectedPeriod === "Last Year") {
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(now.getFullYear() - 1);
                periodMatch = resourceDate >= oneYearAgo && resourceDate <= now;
            }
        }

        return tagMatch && typeMatch && periodMatch;
    });

    return (
        <>
            <Navbar items={courses} />
            <main>
                <div className={styles.ContainerMenor}>
                    <div className={styles.container}>
                        <a
                            href={route("uploadresources.get")}
                            className={styles.headerSection}
                        >
                            <span>+</span>
                            <h2 className={styles.headerTitle}>
                                Upload Resource
                            </h2>
                        </a>

                        <h3 className={styles.sectionTitle}>Filter by</h3>

                        <h4 className={styles.filterTitle}>Tags</h4>
                        <div className={styles.filterGroup}>
                            {coursesTagsResource.flat().map((tag, index) => (
                                <label
                                    key={index}
                                    className={styles.checkboxLabel}
                                >
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        onChange={() => handleTagChange(tag)}
                                        checked={selectedTags.includes(tag)}
                                    />
                                    <span className={styles.labelText}>
                                        {tag}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <h4 className={styles.filterTitle}>Type</h4>
                        <div className={styles.filterGroup}>
                            {typeResource.map((type, index) => (
                                <label
                                    key={index}
                                    className={styles.checkboxLabel}
                                >
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        onChange={() => handleTypeChange(type)}
                                        checked={selectedTypes.includes(type)}
                                    />
                                    <span className={styles.labelText}>
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.containerResources2}>
                        <div className={styles.containerResources}>
                            {filteredResources.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Foote />
        </>
    );
}

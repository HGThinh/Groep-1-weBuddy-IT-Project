import React from "react";
import styles from "./Resource.module.css";

const fileTypeColors = {
    pdf: "#FF0000",
    doc: "#0078D4",
    xls: "#217346",
    ppt: "#D24726",
    txt: "#808080",
    default: "#CCCCCC",
};

const fileTypeIcons = {
    pdf: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeacrobatreader.svg", // Example from Simple Icons
    doc: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftword.svg",
    xls: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftexcel.svg",
    ppt: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftpowerpoint.svg",
    txt: "https://cdn.jsdelivr.net/npm/simple-icons/icons/notepad.svg",
    default: "https://cdn.jsdelivr.net/npm/simple-icons/icons/file.svg",
};

const ResourceCard = ({ items }) => {
    return (
        <>
            <div className={styles.containerResources}>
                {items.map((resource, index) => {
                    const backgroundColor =
                        fileTypeColors[resource.type.toLowerCase()] ||
                        fileTypeColors.default;
                    const fileIcon =
                        fileTypeIcons[resource.type.toLowerCase()] ||
                        fileTypeIcons.default;

                    return (
                        <div
                            key={index}
                            className={styles.containerResource}
                            style={{ backgroundColor }}
                        >
                            {/* Download Icon */}
                            <div className={styles.downloadIcon}></div>

                            <div className={styles.resourceCard}>
                                <a href="">
                                    {/* Add File Type Icon */}
                                    <div className={styles.fileTypeIcon}>
                                        <img
                                            src={fileIcon}
                                            alt={`${resource.type} icon`}
                                            className={styles.fileTypeImage}
                                        />
                                    </div>
                                    <h3>{resource.title}</h3>
                                    <p className={styles.resourceType}>
                                        {resource.type}
                                    </p>
                                    <div className={styles.resourceTags}>
                                        {resource.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={styles.resourceTag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className={styles.resourceDescription}>
                                        {resource.description}
                                    </p>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ResourceCard;

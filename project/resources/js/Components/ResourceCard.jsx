import React from "react";
import styles from "./Resource.module.css";

const fileTypeColors = {
    pdf: "#FF0000",
    doc: "#0078D4",
    xls: "#217346",
    ppt: "#D24726",
    txt: "#808080",
    default: "#ffffff2c",
};

const fileTypeIcons = {
    pdf: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeacrobatreader.svg",
    doc: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftword.svg",
    xls: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftexcel.svg",
    ppt: "https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftpowerpoint.svg",
    txt: "https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/txt-file-icon.png",
    default: "https://cdn.jsdelivr.net/npm/simple-icons/icons/file.svg",
};

const ResourceCard = ({ resource }) => {
    const backgroundColor =
        fileTypeColors[resource.type.toLowerCase()] || fileTypeColors.default;
    const fileIcon =
        fileTypeIcons[resource.type.toLowerCase()] || fileTypeIcons.default;

    return (
        <div className={styles.containerResource} style={{ backgroundColor }}>
            <a
                href={`http://127.0.0.1:8000/resources/download/${resource.file_path}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.resourceCard}>
                    {fileIcon !== fileTypeIcons.default && (
                        <div className={styles.fileTypeIcon}>
                            <img
                                src={fileIcon}
                                alt={`${resource.type} icon`}
                                className={styles.fileTypeImage}
                            />
                        </div>
                    )}
                    <h3>{resource.title}</h3>
                    <p className={styles.resourceType}>{resource.type}</p>
                    <div className={styles.resourceTags}>
                        {resource.tags &&
                            resource.tags.map((tag, index) => (
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
                </div>
            </a>
        </div>
    );
};

export default ResourceCard;

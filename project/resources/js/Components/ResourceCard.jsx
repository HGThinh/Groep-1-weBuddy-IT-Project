import React from 'react';
import styles from './Resource.module.css';

const ResourceCard = ({ title, type, description, tags }) => {
    return (
        <div className={styles.resourceCard}>
        <h3 className={styles.resourceTitle}>{title}</h3>
        <p className={styles.resourceDescription}>{description}</p>
        <p className={styles.resourceType}>{type}</p>
        <div className={styles.resourceTags}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.resourceTag}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
    )
}
export default ResourceCard;
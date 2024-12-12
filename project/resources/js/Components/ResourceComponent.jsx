import React from 'react';
import styles from './Resource.module.css';

const ResourceComponent = ({ title, type, description, tags }) => {
    return (
      <div className="ressource-card">
        <h3 className="resource-title">{title}</h3>
        <p className="resource-description">{description}</p>
        <p className="resource-type">{type}</p>
        <div className="resource-tags">
        {tags.map((tag, index) => (
          <span key={index} className="resource-tag">
            {tag}
          </span>
        ))}
      </div>
      </div>
    )
}
export default ResourceComponent;
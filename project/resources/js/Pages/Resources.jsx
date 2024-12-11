import React from 'react';
import ResourceComponent from '../components/ResourceComponent';
import styles from '../styles/Resources.module.css';

const resourcesData = [
  {
    title: 'Summary - Chapter 4',
    description: 'This is a summary of Chapter 4, covering subnetting and basic network concepts.',
    type: 'Summary',
    tags: ['Network Essentials', 'Subnetting', 'Dutch'],
  },
  {
    title: 'Study Planning - All Chapters',
    description: 'A complete study plan to prepare for the exams effectively.',
    type: 'Guide',
    tags: ['Study Tips', 'Planning', 'Exams'],
  },
  {
    title: 'Notes - Windows Chapters 1 & 2',
    description: 'Detailed notes covering commands and shortcuts for Windows OS.',
    type: 'Notes',
    tags: ['Windows', 'Commands', 'Shortcuts', 'OS'],
  },
];

const ResourcesPage = () => {
  return (
    <div className={styles.resourcesPage}>
      <h1 className={styles.pageTitle}>Resources</h1>
      <div className={styles.resourcesGrid}>
        {resourcesData.map((resource, index) => (
          <ResourceComponent key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;

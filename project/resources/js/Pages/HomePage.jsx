import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import { useState } from "react";
import styles from '@/Components/Homepage.module.css';
import SearchBar from "@/Components/Searchbar";

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
        <SearchBar />
        
        <main>
        <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Resources</h2>
                <div className={styles.resourcesContainer}>
                <div className={`${styles.resourceCard} ${styles.red}`}>
            <a href="../ResourceDetails/resourcedetails.html">
                <h3>Summary - Chapter 4</h3>
                <p>Network Essentials, Subnetting</p>
            </a>
                </div>
                <div className={`${styles.resourceCard} ${styles.blue}`}>
             <a href="../ResourceDetails/resourcedetails.html">
                <h3>Notes - Windows 1 & 2</h3>
                <p>Commands, OS Shortcuts</p>
            </a>
                </div>
            <div className={`${styles.resourceCard} ${styles.green}`}>
            <a href="../ResourceDetails/resourcedetails.html">
                <h3>Study Planning</h3>
                <p>IT Essentials, Study Tips</p>
            </a>
            </div>
                </div>
        </section>

        {/* Forum Section */}
        <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Forum</h2>
                <div className={styles.forumContainer}>
                <div className={styles.forumQuestion}>
            <a href="#nowhere">
                <h3>How do I fix my JavaScript for-loop?</h3>
                <p>@Selma El Mahyaoui - 1 hour ago</p>
            </a>
                </div>
            <div className={styles.forumQuestion}>
                <a href="#nowhere">
                <h3>What is the best way to subnet?</h3>
                <p>@John - 2 hours ago</p>
            </a>
            </div>
            <div className={styles.forumQuestion}>
                <a href="#nowhere">
                <h3>How to create a database schema?</h3>
                <p>@Emma Styles - 3 hours ago</p>
            </a>
            </div>
            </div>
        </section>

        {/* Bookmarks Section */}
        <section className="section" id="bookmarks">
          <h2>Bookmarks</h2>
          <div className="bookmark-container">
            <div className="resource-card red">
              <a href="../ResourceDetails/resourcedetails.html">
                <h3>Summary - Chapter 4</h3>
                <p>Network Essentials, Subnetting</p>
              </a>
            </div>
            <div className="forum-question">
              <a href="#nowhere">
                <h3>How to create a database schema?</h3>
                <p>@Emma Styles - 3 hours ago</p>
              </a>
            </div>
          </div>
        </section>
      </main>
            <Foote />
        </>
    );
}

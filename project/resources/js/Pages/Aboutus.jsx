import React from "react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import styles from "@/Components/Aboutus.module.css";

const HeroSection = () => (
    <section className={styles.hero}>
        <div className={styles.heroContent}>
            <h1>Empowering Students, One Buddy at a Time</h1>
            <p>
                WeBuddy is more than just a platform, it's your partner, guiding
                and supporting you throughout your academic journey. Together,
                we unlock opportunities, build connections, and achieve success.
            </p>
        </div>
    </section>
);

const KeyFeatures = () => (
    <section className={styles.keyFeatures}>
        <h2>What We Offer</h2>
        <div className={styles.featuresGrid}>
            <div className={styles.feature}>
                <div className={styles.icon}>❓</div>
                <h3>
                    <a href={route("forum.get")}>Q&A Forums</a>
                </h3>
                <p>
                    Ask and answer questions, share your expertise, and earn
                    rewards while building your skills.
                </p>
            </div>
            <div className={styles.feature}>
                <div className={styles.icon}>🤝</div>
                <h3>
                    <a href={route("mentor.get")}>Find a Mentor</a>
                </h3>
                <p>
                    Get matched with a peer or expert who will guide and
                    motivate you to reach your goals.
                </p>
            </div>
            <div className={styles.feature}>
                <div className={styles.icon}>📚</div>
                <h3>
                    <a href={route("resources.get")}>Course Resources</a>
                </h3>
                <p>
                    From notes to study tips, find everything you need to
                    succeed in your degree program.
                </p>
            </div>
        </div>
    </section>
);

const VMVSection = () => (
    <section className={styles.vmv}>
        <h2>Our Vision, Mission & Values</h2>
        <div className={styles.bubbleContainer}>
            <div className={`${styles.feature} ${styles.bubble}`}>
                <h3>Vision</h3>
                <p>
                    To foster a world where every student is empowered to
                    succeed through collaboration and support.
                </p>
            </div>
            <div className={`${styles.feature} ${styles.bubble}`}>
                <h3>Mission</h3>
                <p>
                    To connect students with peers and mentors while providing
                    top-notch academic resources.
                </p>
            </div>
            <div className={`${styles.feature} ${styles.bubble}`}>
                <h3>Values</h3>
                <p>
                    Community, Growth, Integrity, and Inclusivity are at the
                    heart of everything we do.
                </p>
            </div>
        </div>
    </section>
);

const App = () => {
    const courseItems = [
        "Programming Essentials",
        "Advanced React",
        "Web Essentials",
        "Data Essentials",
        "Web advanced",
        "Software Design Essentials",
        "Network Essentials",
        "Security Essentials",
        "Italent",
        "Programming Essentials 2",
        "Desktop OS",
    ];

    return (
        <div>
            <Navbar items={courseItems} />{" "}
            <main>
                <HeroSection />
                <KeyFeatures />
                <VMVSection />{" "}
            </main>
            <Foote />
        </div>
    );
};

export default App;

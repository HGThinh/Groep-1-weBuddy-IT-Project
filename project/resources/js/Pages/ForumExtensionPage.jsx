import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Question from "@/Components/QuestionForum";
import Foote from "@/Components/Foote";
import styles from "@/Components/ForumExtension.module.css";
import Answers from "@/Components/AnswerForum";

import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const questions = [
        {
            Name: "Mariana Z",
            ProfilePicture: "/path/to/image.png",
            TimePosted: "35 minutes",
            Catgeory: "Programming Essentials",
            QuestionTitle: "How to use React Hooks effectively?",
            BoolAnswered: true,
            tags: ["React", "Hooks", "JavaScript"],
            Question:
                "I'm struggling with understanding useState and useEffect. Can someone explain?",
            upvotes: 45,
            comments: 15,
        },
    ];
    const Anwers = [
        {
            Name: "Mariana Z",
            ProfilePicture: "/path/to/image.png",
            TimePosted: "35 minutes",
            Catgeory: "Programming Essentials",
            Question:
                "I'm struggling with understanding useState and useEffect. Can someone explain?",
            upvotes: 45,
            comments: 15,
        },
        {
            Name: "Mariana Z",
            ProfilePicture: "/path/to/image.png",
            TimePosted: "35 minutes",
            Catgeory: "Programming Essentials",
            Question:
                "I'm struggling with understanding useState and useEffect. Can someone explain?",
            upvotes: 45,
            comments: 15,
        },
        {
            Name: "Mariana Z",
            ProfilePicture: "/path/to/image.png",
            TimePosted: "35 minutes",
            Catgeory: "Programming Essentials",
            Question:
                "I'm struggling with understanding useState and useEffect. Can someone explain?",
            upvotes: 45,
            comments: 15,
        },
    ];
    const [value, setValue] = useState(0);

    const courses = [
        "Programming Essentials I",
        "Network Essentials",
        "IT Essentials",
        "Desktop OS",
        "Web Essentials",
        "Study Life",
    ];

    const types = ["Discussion", "Explanation", "Study Resources", "Review"];
    const periods = [
        "Today",
        "Last Week",
        "Last Month",
        "Last Semester",
        "Last Year",
    ];
    const BackButton = () => {
        return (
            <button
                className={styles.backButton}
                onClick={() => window.history.back()}
                style={{ cursor: "pointer" }}
            >
                &larr; Go Back
            </button>
        );
    };
    const statuses = ["Answered", "In Progress", "No Answers"];
    const verifications = ["Verified", "Unverified"];

    return (
        <>
            <Navbar items={courses} />

            <div className={styles.content}>
                <BackButton />
                <Question data={questions} />
                <div className={styles.reply}>
                    <img src="/Images/UserProfileNoPic.png" alt="" />
                    <input type="text" placeholder="Type your reply..." />
                </div>
                <Answers data={Anwers} />
            </div>
            <Foote></Foote>
        </>
    );
}

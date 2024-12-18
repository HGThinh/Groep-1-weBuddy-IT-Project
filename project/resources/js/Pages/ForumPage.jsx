import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Mentor from "@/Components/Mentor";
import styles from "@/Components/Mentorpage.module.css";
import Foote from "@/Components/Foote";
import { useState } from "react";

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
    const mentorData = {
        name: "John Doe",
        points: 250,
        role: "Buddy",
        tags: ["React", "JavaScript", "CSS"],
        description:
            "John is an experienced developer specializing in front-end technologies.",
    };
    const courses = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "efwfeefwefwefwefw",
        "effweefwefwefw",
        "fwefewefwefwefwfew",
        "efwfewfewefwfe",
    ];

    const [value, setValue] = useState(0);

    return (
        <>
            <Navbar items={courses} />
            <h1>dit is de forumpage</h1>

            <Foote />
        </>
    );
}

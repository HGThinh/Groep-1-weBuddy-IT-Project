import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
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

    const courses = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "efwfeefwefwefwefw",
        "effweefwefwefw",
        "fwefewefwefwefwfew",
        "efwfewfewefwfe",
    ];

    return (
        <>
            <Navbar items={courses} />
            <h1>dit is de forumpage</h1>

            <Foote />
        </>
    );
}

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
            <h1>dit is de profile page</h1>

            <Foote />
        </>
    );
}

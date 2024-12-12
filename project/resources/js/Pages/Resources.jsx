import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";


export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
        "Programming Essentials 2",
        "IT Essentials",
        "Desktop OS",
        "Network essentials",
    ];

    //data of the resources (title, description, type, tags)
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

    return (
        <>
            <Navbar items={courses} />
            <div className="resource-cards-container"></div>
            <Foote />
        </>
    );
}
import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";
import styles from "@/Components/CourseHomePage.module.css";
import Question from "@/Components/QuestionForum";
import Mentor from "@/Components/Mentor";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const mentors = [
        {
            name: "John Doe",
            points: 250,
            role: "Buddy",
            tags: ["React", "JavaScript", "CSS"],
            description:
                "John is an experienced developer specializing in front-end technologies.Vorig jaar hebben we ons vooral gefocust op de frontend van een website. We hebben geleerd hoe we een website kunnen opbouwen met HTML. Vorig jaar hebben we ons vooral gefocust op de frontend van een website. We hebben geleerd hoe we een website kunnen opbouwen met HTMLVorig jaar hebben we ons vooral gefocust op de frontend van een website. We hebben geleerd hoe we een website kunnen opbouwen met HTML ",
        },
        {
            name: "John Doe",
            points: 250,
            role: "Buddy",
            tags: ["React", "JavaScript", "CSS"],
            description:
                "John is an experienced developer specializing in front-end technologies.",
        },
    ];
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
    const coursesTagsResource = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "Programming Essentials 2",
        "IT Essentials",
        "Desktop OS",
        "Network essentials",
    ];
    const TypeResource = [
        "Notes",
        "Study planning",
        "Summaries",
        "Past Exams",
        "Exercices",
    ];

    //data of the resources (title, description, type, tags)
    const resourcesData = [
        {
            title: "Summary - Chapter 4",
            description:
                "This is a summary of Chapter 4, covering subnetting and basic network concepts.",
            type: "txt",
            tags: ["Network Essentials", "Subnetting", "Dutch"],
        },
        {
            title: "Study Planning - All Chapters",
            description:
                "A complete study plan to prepare for the exams effectively.",
            type: "pdf",
            tags: ["Study Tips", "Planning", "Exams"],
        },
        {
            title: "Notes - Windows Chapters 1 & 2",
            description:
                "Detailed notes covering commands and shortcuts for Windows OS.",
            type: "ppt",
            tags: ["Windows", "Commands", "Shortcuts", "OS"],
        },
        {
            title: "Summary - Chapter 4",
            description:
                "This is a summary of Chapter 4, covering subnetting and basic network concepts.",
            type: "doc",
            tags: ["Network Essentials", "Subnetting", "Dutch"],
        },
    ];
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

    return (
        <>
            <Navbar items={courses} />
            <main>
                <h1>Backend Web</h1>
                <p className={styles.TitleDesc}>
                    LVorig jaar hebben we ons vooral gefocust op de frontend van
                    een website. We hebben geleerd hoe we een website kunnen
                    opbouwen met HTML, CSS en JavaScript. We hebben geleerd hoe
                    we een website kunnen stijlen, hoe we interactieve elementen
                    kunnen toevoegen en hoe we de website kunnen laten reageren
                    op gebruikersinput. Met andere woorden, we hebben ons tot
                    nutoe gefocussed op het deel van de website dat de gebruiker
                    ziet en waarmee deze interactie heeft. We kunnen dit
                    vergelijken met de UI van een applicatie. De frontend is
                    echter niet in staat om gegevens op te slaan, te verwerken
                    of te manipuleren. Zelfs toen we via een fetch-call gegevens
                    naar een API stuurden, was het de API die de gegevens
                    verwerkte en opslaat. De backend is het deel van de website
                    dat niet zichtbaar is voor de gebruiker. De backend is
                    verantwoordelijk voor het verwerken van gegevens, het
                    uitvoeren van berekeningen en het communiceren met de
                    database, versturen van mails, genereren van PDFs, ... De
                    backend is dus een essentieel deel voor het bouwen van
                    dynamische websites en webapplicaties. Zonder een backend
                    zouden we geen gegevens langduren kunnen bewaren of andere
                    complexere berekeningen maken.
                </p>
                <h1>Mentors</h1>
                <p className={styles.TitleDesc}>
                    Mentors available for this course
                </p>
                <p className={styles.TitleDesc}>
                    <a href="questioncourse">
                        Go to mentors page for this course
                    </a>
                </p>
                <p></p>
                {mentors.length > 0 ? (
                    mentors.map((mentor) => (
                        <div className={styles.mentorCard} key={mentor.id}>
                            <Mentor
                                name={mentor.name}
                                points={mentor.points}
                                role={mentor.role}
                                tags={mentor.tags}
                                description={mentor.description}
                            />
                        </div>
                    ))
                ) : (
                    <p>No mentors available.</p>
                )}
                <h1>Forum</h1>
                <p className={styles.TitleDesc}>
                    Last 2 questions for this course
                </p>
                <p className={styles.TitleDesc}>
                    <a href="questioncourse">
                        Go to resource page for this course
                    </a>
                </p>
                <br />
                <Question data={questions} />
                <h1>Recources</h1>
                <p className={styles.TitleDesc}>
                    Last 4 uploaded recources for this Course
                </p>
                <p className={styles.TitleDesc}>
                    <a href="recourcecourse">
                        Go to resource page for this course
                    </a>
                </p>
                <br />
                <div className={styles.containerResources2}>
                    <div className={styles.containerResources}>
                        {resourcesData.map((resource, index) => (
                            <ResourceCard key={index} resource={resource} />
                        ))}
                    </div>
                </div>
            </main>
            <Foote />
        </>
    );
}

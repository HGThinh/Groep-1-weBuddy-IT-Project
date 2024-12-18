import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import Question from "@/Components/QuestionForum";

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
            Answer: "Hooks allow you to manage state and side effects in functional components. Start with basic examples.",
        },
        {
            Name: "John D",
            ProfilePicture: "/path/to/another-image.png",
            TimePosted: "2 hours",
            Catgeory: "Advanced React",
            QuestionTitle:
                "What is the difference between Context API and Redux?",
            BoolAnswered: false,
            tags: ["React", "State Management", "Redux"],
            Question:
                "I know both can handle state, but which is better for complex apps?",
            upvotes: 30,
            Answer: null,
        },
        // Add more questions if needed
    ];

    return (
        <>
            <Navbar items={courses} />
            <Head title="Welcome" />
            <Question data={questions} />
            <div>
                <div>
                    <div>
                        <header>
                            <nav>
                                {auth.user ? ( //ternary operator
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route("login")}>
                                            Log in
                                        </Link>
                                        <Link href={route("register")}>
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main></main>

                        <footer>
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
            <Foote></Foote>
        </>
    );
}

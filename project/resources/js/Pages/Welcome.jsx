import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

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

    return (
        <>
            <Navbar items={courses} />
            <Head title="Welcome" />
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
        </>
    );
}

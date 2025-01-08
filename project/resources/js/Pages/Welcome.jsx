import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import axios from "axios";

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

    // Define styles
    // const containerStyle = {
    //     minHeight: '100vh',
    //     backgroundColor: '#f3f4f6',
    //     padding: '20px'
    // };

    const headerStyle = {
        padding: '15px',
    };


    const loginButtonStyle = {
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '6px',
        textDecoration: 'none',
        marginRight: '10px',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer'
    };

    const registerButtonStyle = {
        backgroundColor: '#22c55e',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '6px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer'
    };


    return (
        <>
            <Navbar items={courses} />
            <Head title="Welcome" />
            <div >
                <div>
                    <div>
                        <header style={headerStyle}>
                            <nav >
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            color: 'black',
                                            border: '1px solid transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            style={loginButtonStyle}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = '#2563eb'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = '#3b82f6'
                                            }}
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            style={registerButtonStyle}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = '#16a34a'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = '#22c55e'
                                            }}
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main style={{ minHeight: '400px' }}>
                            {/* Your main content here */}
                        </main>

                        <Foote/>
                    </div>
                </div>
            </div>
        </>
    );
}

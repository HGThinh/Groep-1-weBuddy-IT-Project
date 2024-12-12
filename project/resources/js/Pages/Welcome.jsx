import { Head, Link } from '@inertiajs/react';
import ResourceComponent from '@/Components/ResourceComponent';
import React from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

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

    const ResourcePage = () => {
        return (
            <>
                <ResourceComponent tags={resourcesData} />
                <Head title="Welcome" />
                <div>
                    <div>
                        <div>
                            <header>
                                <nav>
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link href={route('login')}>Log in</Link>
                                            <Link href={route('register')}>Register</Link>
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
    };

    return <ResourcePage />;
}
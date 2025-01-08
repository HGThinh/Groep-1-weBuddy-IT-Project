import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Question from "@/Components/QuestionForum";
import styles from "@/Components/Forum.module.css";
import Foote from "@/Components/Foote";
import { useState, useEffect } from "react";

export default function Welcome({ auth, questions: initialQuestions = [] }) {
    // Add this console.log right after receiving the props
    console.log('Initial Questions Data:', initialQuestions);

    const [questions, setQuestions] = useState(initialQuestions);

    // Add another console.log to verify the state is set correctly
    useEffect(() => {
        console.log('Questions in State:', questions);
    }, [questions]);

    const [filteredQuestions, setFilteredQuestions] = useState(initialQuestions);
    const [filters, setFilters] = useState({
        course: {
            programmingEssentials: false,
            networkEssentials: false,
            itEssentials: false,
            desktopOS: false,
            webEssentials: false,
            studyLife: false
        },
        type: {
            discussion: false,
            explanation: false,
            studyResources: false,
            review: false
        },
        period: {
            today: false,
            lastWeek: false,
            lastMonth: false,
            lastSemester: false,
            lastYear: false
        },
        status: {
            answered: false,
            inProgress: false,
            noAnswers: false
        },
        verified: {
            verified: false,
            unverified: false
        }
    });
    const handleFilterChange = (category, item) => {
        setFilters(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [item]: !prev[category][item]
            }
        }));
    };

    useEffect(() => {
        const applyFilters = () => {
            const filtered = questions.filter((question) => {
                // Helper function to check if any filter in a category is selected
                const isAnyFilterSelected = (filterCategory) =>
                    Object.values(filters[filterCategory]).some(value => value);

                // Helper function to check if question matches selected filters in a category
                const matchesFilter = (filterCategory, questionProperty) => {
                    return !isAnyFilterSelected(filterCategory) ||
                        Object.entries(filters[filterCategory])
                            .some(([key, value]) => value && questionProperty === key);
                };

                // Course filter
                const courseMatches = matchesFilter('course', question.course);

                // Type filter
                const typeMatches = matchesFilter('type', question.type);

                // Period filter
                const periodMatches = matchesFilter('period', question.period);

                // Status filter
                const statusMatches = matchesFilter('status', question.status);

                // Verified filter
                const verifiedMatches = matchesFilter('verified', question.verified);

                // All conditions must be true for the question to be included
                return courseMatches &&
                       typeMatches &&
                       periodMatches &&
                       statusMatches &&
                       verifiedMatches;
            });

            setFilteredQuestions(filtered);
        };

        applyFilters();
    }, [filters, questions]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar items={["Programming Essentials I", "Network Essentials", "IT Essentials"]} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <Link href={route('question.create')} className={styles.headerSection}>
                        <span>+</span>
                        <h2 className={styles.headerTitle}>Ask a question</h2>
                    </Link>

                    <h3 className={styles.sectionTitle}>Filter by</h3>

                    {/* Course Filter */}
                    <h4 className={styles.filterTitle}>Course</h4>
                    <div className={styles.filterGroup}>
                        {[
                            ['programmingEssentials', 'Programming Essentials I'],
                            ['networkEssentials', 'Network Essentials'],
                            ['itEssentials', 'IT Essentials'],
                            ['desktopOS', 'Desktop OS'],
                            ['webEssentials', 'Web Essentials'],
                            ['studyLife', 'Study Life']
                        ].map(([value, label]) => (
                            <label key={value} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.course[value]}
                                    onChange={() => handleFilterChange('course', value)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Type Filter */}
                    <h4 className={styles.filterTitle}>Type</h4>
                    <div className={styles.filterGroup}>
                        {[
                            ['discussion', 'Discussion'],
                            ['explanation', 'Explanation'],
                            ['studyResources', 'Study Resources'],
                            ['review', 'Review']
                        ].map(([value, label]) => (
                            <label key={value} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.type[value]}
                                    onChange={() => handleFilterChange('type', value)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Period Filter */}
                    <h4 className={styles.filterTitle}>Period</h4>
                    <div className={styles.filterGroup}>
                        {[
                            ['today', 'Today'],
                            ['lastWeek', 'Last Week'],
                            ['lastMonth', 'Last Month'],
                            ['lastSemester', 'Last Semester'],
                            ['lastYear', 'Last Year']
                        ].map(([value, label]) => (
                            <label key={value} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.period[value]}
                                    onChange={() => handleFilterChange('period', value)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Status Filter */}
                    <h4 className={styles.filterTitle}>Status</h4>
                    <div className={styles.filterGroup}>
                        {[
                            ['answered', 'Answered'],
                            ['inProgress', 'In Progress'],
                            ['noAnswers', 'No Answers']
                        ].map(([value, label]) => (
                            <label key={value} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.status[value]}
                                    onChange={() => handleFilterChange('status', value)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Verified Filter */}
                    <h4 className={styles.filterTitle}>Verified</h4>
                    <div className={styles.filterGroup}>
                        {[
                            ['verified', 'Verified'],
                            ['unverified', 'Unverified']
                        ].map(([value, label]) => (
                            <label key={value} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.verified[value]}
                                    onChange={() => handleFilterChange('verified', value)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.content}>
                    {filteredQuestions.length > 0 ? (
                        <Question data={filteredQuestions} />
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No questions found</p>
                        </div>
                    )}
                </div>
            </div>
            <Foote />
        </div>
    );
}

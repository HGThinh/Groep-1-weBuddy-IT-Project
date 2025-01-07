import React from "react";
import Navbar from "@/Components/Navbar";
import ResourceCard from "@/Components/ResourceCard";
import Foote from "@/Components/Foote";
import styles from "@/Components/CourseHomePage.module.css";
import Question from "@/Components/QuestionForum";
import Mentor from "@/Components/Mentor";

export default function CourseHome({ courseName, resources }) {
    console.log("Course Name in Props:", courseName);
    console.log("Resources in Props:", resources);
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
            <Navbar />
            <main>
                <h1>{courseName}</h1>
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

                <h1>Resources</h1>
                <p className={styles.TitleDesc}>
                    Resources tagged with {courseName}
                </p>
                <p className={styles.TitleDesc}>
                    <a href={`/resources/${courseName}`}>
                        Go to resource page for this course
                    </a>
                </p>
                <br />
                <div className={styles.containerResources2}>
                    <div className={styles.containerResources}>
                        {resources.length > 0 ? (
                            resources.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} />
                            ))
                        ) : (
                            <p>No resources available for this course.</p>
                        )}
                    </div>
                </div>
            </main>
            <Foote />
        </>
    );
}

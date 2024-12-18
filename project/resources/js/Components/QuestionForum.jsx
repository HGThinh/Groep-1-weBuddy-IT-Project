import React from "react";
import styles from "./Mentor.module.css";

// example mentor infor; Name: Mariana Z, ProfilePicture: image.png, TimePosted: 35 minutes, Catgeory: Prog essentaiols, Description
const Mentor = ({
    Name,
    ProfilePicture,
    TimePosted,
    Catgeory,
    QuestionTitle,
    BoolAnswered,
    tags,
    Question,
    upvotes,
    Answer,
}) => {
    return (
        <div className={styles.Question}>
            <div className={styles.containerImg}>
                <img src={ProfilePicture} alt={`${Name}'s profile`} />
            </div>
            <div>
                <h2>
                    {Name} | {TimePosted} points
                </h2>
                <ul className={styles.tags}>
                    <li className={styles.role}>{Catgeory}</li>
                    {tags.map((tag, index) => (
                        <li className={styles.tag} key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <h3>{QuestionTitle}</h3>
                <p>{Question}</p>
                <p>{upvotes} upvotes</p>
                <p>{BoolAnswered ? "Answered" : "Not Answered"}</p>
                <p>{Answer}</p>
            </div>
        </div>
    );
};

export default Mentor;

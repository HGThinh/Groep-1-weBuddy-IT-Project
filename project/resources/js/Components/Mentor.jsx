// import React from "react";
// import styles from "./Mentor.module.css";

// const Mentor = ({
//     name,
//     points,
//     role,
//     tags,
//     description,
//     languages = [], // Added languages field
//     location, // Added location field
//     bio, // Added bio field
//     motivation_letter, // Added motivation letter field
// }) => {
//     return (
//         <div className={styles.Mentor}>
//             <div className={styles.containerImg}>
//                 <img
//                     src="/Images/UserProfileNoPic.png"
//                     alt={`${name}'s profile`}
//                 />
//             </div>
//             <div>
//                 <h2>
//                     {name} | {points} points
//                 </h2>
//                 <ul className={styles.tags}>
//                     <li className={styles.role}>{role}</li>
//                     {tags.map((tag, index) => (
//                         <li className={styles.tag} key={index}>
//                             {tag}
//                         </li>
//                     ))}
//                 </ul>

//                 <p>{description}</p>

//                 {/* Languages */}
//                 {languages.length > 0 && (
//                     <div>
//                         <h3>Languages</h3>
//                         <ul>
//                             {languages.map((language, index) => (
//                                 <li key={index}>{language}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* Location */}
//                 {location && (
//                     <div>
//                         <h3>Location</h3>
//                         <p>{location}</p>
//                     </div>
//                 )}

//                 {/* Bio */}
//                 {bio && (
//                     <div>
//                         <h3>Bio</h3>
//                         <p>{bio}</p>
//                     </div>
//                 )}

//                 {/* Motivation Letter */}
//                 {motivation_letter && (
//                     <div>
//                         <h3>Motivation Letter</h3>
//                         <p>{motivation_letter}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Mentor;

export default function Mentor({ name, points, role, tags, description, bio }) {
    return (
        <div className={styles.mentorCard}>
            <h3>{name}</h3>
            <div className={styles.points}>Points: {points}</div>
            <div className={styles.role}>{role}</div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
            <p className={styles.description}>{description}</p>
            {bio && <p className={styles.bio}>{bio}</p>}
        </div>
    );
}

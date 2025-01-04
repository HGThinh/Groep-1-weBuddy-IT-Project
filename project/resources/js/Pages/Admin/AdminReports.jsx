import React from "react";
import AdminNavbar from "@/Components/Admin/AdminNavbar";
import Styles from "@/Components/Admin/AdminReportsPage.module.css";

const App = () => {
    return (
        <>
            <AdminNavbar />

            <div className={Styles.container}>
                <div className={Styles["cards-container"]}>
                    <a href="#link to forum reports">
                        <div className={Styles.card}>
                            <h1>Forum reports</h1>
                            <div
                                className={`${Styles.icon} ${Styles["forum-icon"]}`}
                            ></div>
                        </div>
                    </a>
                    <a href="#link to forum reports">
                        <div className={Styles.card}>
                            <h1>Resources reports</h1>
                            <div
                                className={`${Styles.icon} ${Styles["resources-icon"]}`}
                            ></div>
                        </div>
                    </a>
                    <a href="#link to forum reports">
                        <div className={Styles.card}>
                            <h1>Mentor reports</h1>
                            <div
                                className={`${Styles.icon} ${Styles["mentor-icon"]}`}
                            ></div>
                        </div>
                    </a>
                    <a href="#link to forum reports">
                        <div className={Styles.card}>
                            <h1>Forum reports</h1>
                            <div
                                className={`${Styles.icon} ${Styles["forum-icon"]}`}
                            ></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default App;

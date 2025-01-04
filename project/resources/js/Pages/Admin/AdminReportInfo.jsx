import React from "react";
import AdminNavbar from "@/Components/Admin/AdminNavbar";
import Styles from "@/Components/Admin/AdminReportsPerSectionPage.module.css";
import { Description } from "@headlessui/react";

const App = () => {
    const report = {
        id: 1,
        user: "John Doe",
        reason: "Spam",
        Description: "This is a spam",
        link: "linkcourse",
        date: "2021-08-06",
    };
    return (
        <>
            <AdminNavbar />
            <main>
                <div className={Styles.Container}>
                    <h1 className={Styles.d}>Report {report.id}</h1>
                    <div className={Styles.Cards}>
                        <div key={report.id} className={Styles.Card}>
                            <p>
                                <strong>Report Id:</strong> {report.id}
                            </p>

                            <p>
                                <strong>User:</strong> {report.user}
                            </p>
                            <p>
                                <strong>Reason:</strong> {report.reason}
                            </p>
                            <p>
                                <strong>Description:</strong>
                                {report.Description}
                            </p>
                            <p>
                                <strong>Link:</strong>{" "}
                                <a href={`${report.link}/${report.id}`}>
                                    Link to the message or mentor or recourse
                                </a>
                            </p>
                            <p>
                                <strong>Date:</strong> {report.date}
                            </p>
                            <p>
                                <a
                                    href={`closereport/${report.id}`}
                                    key={report.id}
                                >
                                    X Close report
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;

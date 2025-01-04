import React from "react";
import AdminNavbar from "@/Components/Admin/AdminNavbar";
import Styles from "@/Components/Admin/AdminReportsPerSectionPage.module.css";

const App = () => {
    const reports = [
        {
            id: 1,
            user: "John Doe",
            date: "2021-08-06",
        },
        {
            id: 2,
            user: "Jane Smith",
            date: "2021-08-09",
        },
    ];

    return (
        <>
            <AdminNavbar />
            <main>
                <div className={Styles.Container}>
                    <h1 className={Styles.d}>Reports</h1>
                    <div className={Styles.Cards}>
                        {reports.map((report) => (
                            <a href="" key={report.id} className={Styles.Card}>
                                <p>
                                    <strong>Report Id:</strong> {report.id}
                                </p>
                                <p>
                                    <strong>User:</strong> {report.user}
                                </p>
                                <p>
                                    <strong>Date:</strong> {report.date}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;

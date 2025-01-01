import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import { useState } from "react";
import 
import SearchBar from "@/Components/Searchbar";

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
        "Web Development Basics",
        "efwfeefwefwefwefw",
        "effweefwefwefw",
        "fwefewefwefwefwfew",
        "efwfewfewefwfe",
    ];

    return (
        <>
            <Navbar items={courses} />
            <h1>dit is de Home page</h1>
            <SearchBar />
            <main>
        {/* Resources Section */}
        <section className="section" id="resources">
          <h2>Resources</h2>
          <div className="resources-container">
            <div className="resource-card red">
              <a href="../ResourceDetails/resourcedetails.html">
                <h3>Summary - Chapter 4</h3>
                <p>Network Essentials, Subnetting</p>
              </a>
            </div>
            <div className="resource-card blue">
              <a href="../ResourceDetails/resourcedetails.html">
                <h3>Notes - Windows 1 & 2</h3>
                <p>Commands, OS Shortcuts</p>
              </a>
            </div>
            <div className="resource-card green">
              <a href="../ResourceDetails/resourcedetails.html">
                <h3>Study Planning</h3>
                <p>IT Essentials, Study Tips</p>
              </a>
            </div>
          </div>
        </section>

        {/* Forum Section */}
        <section className="section" id="forum">
          <h2>Forum</h2>
          <div className="forum-container">
            <div className="forum-question">
              <a href="#nowhere">
                <h3>How do I fix my JavaScript for-loop?</h3>
                <p>@Selma El Mahyaoui - 1 hour ago</p>
              </a>
            </div>
            <div className="forum-question">
              <a href="#nowhere">
                <h3>What is the best way to subnet?</h3>
                <p>@John - 2 hours ago</p>
              </a>
            </div>
            <div className="forum-question">
              <a href="#nowhere">
                <h3>How to create a database schema?</h3>
                <p>@Emma Styles - 3 hours ago</p>
              </a>
            </div>
          </div>
        </section>

        {/* Bookmarks Section */}
        <section className="section" id="bookmarks">
          <h2>Bookmarks</h2>
          <div className="bookmark-container">
            <div className="resource-card red">
              <a href="../ResourceDetails/resourcedetails.html">
                <h3>Summary - Chapter 4</h3>
                <p>Network Essentials, Subnetting</p>
              </a>
            </div>
            <div className="forum-question">
              <a href="#nowhere">
                <h3>How to create a database schema?</h3>
                <p>@Emma Styles - 3 hours ago</p>
              </a>
            </div>
          </div>
        </section>
      </main>
            <Foote />
        </>
    );
}

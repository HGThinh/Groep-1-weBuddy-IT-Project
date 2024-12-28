import React from 'react';
import '@/Components/PointsPage.module.css';
import '@/Components/Navbar';
import '@/Components/Foote';

const pointPage = () => {
  return (
    <>
    <Navbar items={courses} />
      <section className="search-bar">
        <input type="text" id="searchInput" placeholder="Search resources, forums, or keywords..." />
        <button id="searchButton">Search</button>
      </section>

      <main className="points-section">
        <div className="section-header">
          <img src="" alt="" className="header-icon" />
          <h2>Your <span className="logo-blue">P</span>oints</h2>
        </div>

        <div className="points-card">
          <div className="points-list">
            <p>+ 3 Uploading a resource in Programming I Essentials - 23 min ago</p>
            <p>+ 1 An upvote in Programming Essentials I - 23 min ago</p>
            <p>+ 2 Responding to a question in Programming Essentials I - 23 min ago</p>
            <div className="points-total">
              <span>12</span>
              <span className="points-text">points</span>
            </div>
          </div>

          <div className="scroll-container">
            <div className="scroll-thumb"></div>
          </div>
        </div>

        <div className="section-header">
          <img src="" alt="" className="header-icon" />
          <h2>Point <span className="logo-blue">S</span>ystem</h2>
        </div>

        <p className="system-description">
          At weBuddy, we believe in active contribution over passive consumption. We want to foster a vibrant, collaborative community where everyone is rewarded for their contributions. To kickstart your journey, every user starts with 10 points. Earn points by sharing knowledge and supporting others, and spend them to access valuable resources.
        </p>

        <div className="points-table">
          <div className="table-row">
            <div className="table-cell">
              <div className="cell-content">
                <p>Downloading a resource</p>
                <p>Uploading a resource</p>
                <p>Responding to a question</p>
                <p>Receiving an upvote on your comment</p>
              </div>
            </div>
            <div className="table-cell">
              <div className="cell-content">
                <p>-3</p>
                <p>+3</p>
                <p>+2</p>
                <p>+1</p>
              </div>
            </div>
          </div>
        </div>

        <p className="system-description">
          Plus, to help users know who they can trust, each user's current point total is displayed next to their name. This provides a quick way to identify active, reliable contributors in the community!
        </p>
      </main>
        <Foote />
    </>
  );
};

export default pointPage;

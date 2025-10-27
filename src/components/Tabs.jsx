import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="tabs-card-inner">
      {/* left column inside the tab card for icons */}
      <div className="card-left-column">
        <img src="/question-icon.png" alt="help" className="small-icon" />
        <img src="/dashboard-icon.png" alt="dash" className="mini-grid-icon" />
      </div>

      {/* main content area */}
      <div className="tabs-main">
        <div className="tabs-row">
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experiences
          </button>
          <button
            className={`tab-btn ${activeTab === "recommended" ? "active" : ""}`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
        </div>

        <div className="tabs-underline" />

        <div className="tab-content" role="region" aria-live="polite">
          {activeTab === "about" && (
            <>
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY &amp; have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my 4-year-old
                twin daughters — Emma and Ella. Both of them just started school,
                so my calendar is usually blocked between 9–10 AM.
              </p>
            </>
          )}

          {activeTab === "experience" && (
            <p>
              I’ve worked with several retail clients, helping them improve sales
              efficiency and streamline operations with Salesforce CRM solutions.
            </p>
          )}

          {activeTab === "recommended" && (
            <p>
              I highly recommend exploring Salesforce Trailhead — an excellent
              platform to learn CRM, automation, and cloud tools at your own pace.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-bg"></div>
        <div className="header-content">
        <div  style={{ height: '100vh', backgroundColor: "#BFE6FF"}} className="d-flex justify-content-center align-items-center">
          <h1 className="display-4">Welcome to GovFund</h1>
          </div>
          <p className="subtitle lead d-flex justify-content-center">Funding Government Organizations</p>
        </div>
      </header>

      <section className="intro">
        <div className="intro-bg"></div>
        <div className="container">
          <h2 className="mb-4">What We Do</h2>
          <p className="lead">
            At GovFund, our mission is to provide financial support to government organizations
            across the country. We understand the importance of well-funded programs and initiatives
            that serve the needs of our citizens and contribute to the betterment of our society.
          </p>
          <p className="lead">
            Through our funding programs, we aim to empower government agencies to implement impactful
            projects, promote innovation, and address the diverse challenges faced by our nation.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="features-bg"></div>
        <div className="container">
          <h2 className="mb-4">Our Services</h2>
          <ul className="list-group">
            <li className="list-group-item">Financial grants for government organizations</li>
            <li className="list-group-item">Support for research and development initiatives</li>
            <li className="list-group-item">Infrastructure funding for public projects</li>
            <li className="list-group-item">Capacity building programs for government employees</li>
            <li className="list-group-item">Collaborative partnerships for community-driven initiatives</li>
          </ul>
        </div>
      </section>

      <footer className="footer bg-light">
        <div className="container">
          <p className="text-center">&copy; {new Date().getFullYear()} GovFund. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

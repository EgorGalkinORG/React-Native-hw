import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <p className="footer-text">
        Forooms, Inc. © 2025. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="max-width footer_flex">
        <div>
          <h3>Solutions</h3>
          <ul>
            <li>Developers</li>
            <li>EDI vs API</li>
            <li>API for EDI</li>
            <li>Security</li>
            <li>EDI Software Decision making guide</li>
          </ul>
        </div>
        <div>
          <h3>Integrations</h3>
          <ul>
            <li>NetSuite Integration</li>
            <li>Shopify Integration</li>
            <li>Quickbooks Integration</li>
            <li>Other ERP Integrations</li>
          </ul>
        </div>
        <div>
          <h3>Standards</h3>
          <ul>
            <li>API for EDIFACT</li>
            <li>API for ANSI X12</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Insights</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="footer_link max-width">
        <span>Follow us</span>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>

      <div className="max-width copyrights">
        <p>&copy; 2024. All rights reserved</p>
        <div>
          <a href="">Privacy policy</a>
          <a href="">Terms of service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

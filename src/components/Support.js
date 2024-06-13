import React from "react";
import "../css/support.css";

const Support = () => {
  return (
    <div className="container-black">
      <div className="max-width support_boxflex">
        <div>
          <h2>
            Why <br></br>
            <span className="span">Zenbridge </span> ?
          </h2>
          <p>Unmatched Pricing, Unparalleled Support.</p>
        </div>
        <div>
          <h3>Nature of use</h3>
          <ul>
            <li>Self serve mode</li>
            <li>Fully managed mode</li>
            <li>Fully customized implementation</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Exclusive delivery manager</li>
            <li>Unlimited developer support hours</li>
            <li>24*7 support via Chat, Email & Phone</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;

import React from "react";
import "../css/whitebox.css";
import graph from "../images/graph.png";

const Whitebox = () => {
  return (
    <div className="max-width white_box">
      <h2>
        A modern day for <span>EDI platform</span> your fast moving team
      </h2>
      <div className="Whitegraph_box">
        <ul>
          <li className="clickwhite">Transactions</li>
          <li>Trading Partners</li>
          <li>Reports</li>
          <li>Issues & Alerts</li>
          <li>API for EDI</li>
          <li>EDI Specification Editor</li>
        </ul>
        <img src={graph} />
      </div>
    </div>
  );
};

export default Whitebox;

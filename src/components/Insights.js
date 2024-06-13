import React from "react";
import "../css/insights.css";
import lap from "../images/lap.png";
import code from "../images/code.png";
import fac from "../images/fac.png";

const Insights = () => {
  return (
    <div className="container-white">
      <div className="max-width textcen">
        <h2 className="insittext">
          Insights from <span className="span">Zenbridge</span>{" "}
        </h2>
        <div className="insights_box">
          <div>
            <img src={lap} />
            <h3>Best EDI Software for a Small Business</h3>
            <span>
              Read arcticle <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
          <div>
            <img src={code} />
            <h3>What’s the best eDI software ?</h3>
            <span>
              Read arcticle <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
          <div>
            <img src={fac} />
            <h3>NetSuite EDI integration A complete setup guide</h3>
            <span>
              Read arcticle <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;

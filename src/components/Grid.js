import React from "react";
import "../css/grid.css";
import faster from "../images/Faster.png";
import Whitebox from "./Whitebox";

const Grid = () => {
  return (
    <div className="container-white">
      <div className="max-width">
        <div className="grid_boxflex">
          <div className="grid_box1">
            <h2>
              We are on a mission to make <span>integration </span>
              easy
            </h2>
            <p>
              An EDI platform for all retailers, suppliers, manufacturers,
              transportation, 3PLs & developers.
            </p>
          </div>
          <div className="grid_box2">
            <img src={faster} />
            <h3>Faster & stabler integrations</h3>
            <p>
              Our API eliminates EDI complexities using a very rich modern
              developer toolset, resulting in faster EDI integrations &
              production environments that are 10X stabler than typical EDI
              solutions.
            </p>
          </div>
        </div>
        <div className="grid_boxflex">
          <div className="grid_box2">
            <img src={faster} />
            <h3>Global connectivity</h3>
            <p>
              Zenbridge is the only platform that offers API for X12 and EDIFACT
              EDI standards. No matter which part of the world or industry your
              trading partner belongs to, you are all set for EDI connectivity.
            </p>
          </div>
          <div className="grid_box2">
            <img src={faster} />
            <h3>Real time data validation</h3>
            <p>
              Unlike traditional EDI solutions, API can validate data for
              partner specific compliances in real time, saving hundreds of
              manual hours lost in communication & thousands of dollars lost as
              chargebacks
            </p>
          </div>
          <div className="grid_box2">
            <img src={faster} />
            <h3>Unlimited support</h3>
            <p>
              Zenbridge offers you a delivery manager who manages trading
              partners & monitors issues with unlimited developer support 24X7
              chat, email & phone connectivity. No more EDI support
              frustrations.
            </p>
          </div>
        </div>
      </div>
      <Whitebox />
    </div>
  );
};

export default Grid;

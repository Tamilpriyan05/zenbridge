import React from "react";
import stackimg from "../images/Stake holders wheel.png";
import "../css/home.css";
import icon1 from "../images/Icon 1.png";
import icon2 from "../images/Icon 2.png";
import icon3 from "../images/Icon 3.png";
import bgarc from "../images/BG Arc.png";
const Home = () => {
  return (
    <div className="home_box">
      <div className="max-width home_boxflex">
        <div>
          <img className="icon1" src={icon1} />
          <img className="icon2" src={icon2} />
          <img className="icon3" src={icon3} />
          <img className="icon4" src={icon2} />

          <h1>
            Slay your EDI
            <span>Integrate Faster</span>{" "}
          </h1>
          <p>
            Leverage the power of API technology faster integrations, greater
            data accuracy, global connectivity & total automation.
          </p>
          <a>Schedule a free demo</a>
        </div>

        <div>
          <img className="home_boximg" src={stackimg} alt="stake logo" />
        </div>
      </div>
      <img className="bgarc" src={bgarc} />
    </div>
  );
};

export default Home;

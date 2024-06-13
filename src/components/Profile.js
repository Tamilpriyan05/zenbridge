import React from "react";
import photo from "../images/Photo.png";
import g2ba from "../images/G2 Badge.png";
import "../css/profile.css";

const Profile = () => {
  return (
    <div className="container-black">
      <div className="max-width profile_flex">
        <div className="profile_box1">
          <img src={photo} />
        </div>
        <div className="profile_box2">
          <h2>
            Not just our technology, we are loved for our{" "}
            <span className="span"> EDI Support</span> too
          </h2>
          <p>
            "We use Zenbridge as middleware for the end to end sales cycle.The
            customer service and developer resource(s) we have partnered with
            have been exceptional".
          </p>
          <span>Seth V, Senior Director, Operations & Logistics</span>
        </div>
        <div className="profile_box3">
          <img src={g2ba} />
          <img src={g2ba} />
          <img src={g2ba} />
          <img src={g2ba} />
          <img src={g2ba} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

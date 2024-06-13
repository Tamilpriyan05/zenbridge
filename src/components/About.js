import React from "react";
import "../css/about.css";
import photo from "../images/Photo.png";

const About = () => {
  return (
    <div className="container-black">
      <div className="max-width">
        <h2>
          What people say about <span className="span">Zenbridge</span> ?
        </h2>
        <div className="about_box">
          <div className="abt_box">
            <div className="abt_box1">
              <img src={photo} />
              <div>
                <h3>Valdemar Forsbe</h3>
                <span>Founder Digitac Finance</span>
              </div>
            </div>

            <p>
              I appreciate your proptness and speedly reply to all my queries.
              The application was smooth as you managed it professionally well
            </p>
          </div>
          <div className="abt_box">
            <div className="abt_box1">
              <img src={photo} />
              <div>
                <h3>Valdemar Forsbe</h3>
                <span>Founder Digitac Finance</span>
              </div>
            </div>

            <p>
              I appreciate your proptness and speedly reply to all my queries.
              The application was smooth as you managed it professionally well
            </p>
          </div>
          <div className="abt_box">
            <div className="abt_box1">
              <img src={photo} />
              <div>
                <h3>Valdemar Forsbe</h3>
                <span>Founder Digitac Finance</span>
              </div>
            </div>

            <p>
              I appreciate your proptness and speedly reply to all my queries.
              The application was smooth as you managed it professionally well
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

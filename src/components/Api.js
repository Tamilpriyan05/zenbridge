import React from "react";
import api from "../images/api.png";
import "../css/api.css";

const Api = () => {
  return (
    <div>
      <div className="max-width api_flex">
        <div>
          <h2>
            With our APIs, we are challenging the status quo of
            <br></br> <span className="span">EDI integrations</span> ?
          </h2>
          <p>
            EDI integrations don t have to be slow, frustrating, or costly.
            Invest in the fastest growing new age EDI technology and save your
            company from EDI nightmares.
          </p>
        </div>
        <div>
          <img src={api} />
        </div>
      </div>
    </div>
  );
};

export default Api;

import React from "react";

const Nav = ({ send }) => {
  return (
    <div className={`nav_bar ${send ? null : "nav_barclick"}`}>
      <ul>
        <li>
          about us <i class="fa-solid fa-angle-down"></i>
        </li>
        <li>
          products <i class="fa-solid fa-angle-down"></i>
        </li>
        <li>
          solutions <i class="fa-solid fa-angle-down"></i>
        </li>
        <li>pricing</li>
        <li>developers</li>
        <li>
          resources <i class="fa-solid fa-angle-down"></i>
        </li>
        <li>
          contact sales <i class="fa-solid fa-chevron-right"></i>
        </li>
        <li>login</li>
      </ul>
    </div>
  );
};

export default Nav;

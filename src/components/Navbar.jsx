import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div class="around_nav">
        <ul className="Raleway-bold">
          <div class="btn_nav">
            <Link to={"/"}>
              <a class="text_btn">Home</a>
            </Link>
          </div>
          <div class="btn_nav">
            <Link to={"/Home"}>
              <a class="text_btn">Proyectos</a>
            </Link>
          </div>
          <div class="btn_nav">
            <Link to={"/Home"}>
              <a class="text_btn">Acerca</a>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

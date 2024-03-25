import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <div class="around_nav">
        <ul className="Raleway-bold">
          <div class="btn_nav">
            <Scroll
              to="Home"
              spy={false}
              smooth={true}
              offset={5}
              duration={500}
            >
              <Link to={"/"}>
                <a class="text_btn">Home</a>
              </Link>
            </Scroll>
          </div>
          <div class="btn_nav">
            <Scroll
              to="proyectos"
              spy={true}
              smooth={true}
              offset={5}
              duration={500}
            >
              <a class="text_btn">Proyectos</a>
            </Scroll>
          </div>
          <div class="btn_nav">
            <Link to={"/acerca"}>
              <a class="text_btn">Acerca</a>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

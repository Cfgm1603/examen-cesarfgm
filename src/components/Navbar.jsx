import React from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Navbar() {
  const location = useLocation();
  const handleScrollToProyectos = () => {
    const { pathname } = window.location;

    console.log(pathname);
    if (pathname === "/") {
      // Si estamos en la página de inicio, hacemos scroll
      scroller.scrollTo("proyectos", {
        spy: true,
        smooth: true,
        offset: 5,
        duration: 500,
      });
    } else {
      // Si no estamos en la página de inicio, redirigimos a '/'
      window.location.href = "/";

      scroller.scrollTo("proyectos", {
        spy: true,
        smooth: true,
        offset: 5,
        duration: 500,
      });
    }
  };

  return (
    <nav>
      <div className="around_nav Raleway-bold">
        <ul>
          <Link to={"/"}>
            <a href="/">
              {/* <Scroll to="Home" smooth={true} offset={5} duration={500}> */}
              <div className="btn_nav">
                <a href="/" className="text_btn">
                  Home
                </a>
              </div>
              {/* </Scroll> */}
            </a>
          </Link>

          <a href="#" onClick={handleScrollToProyectos} className="text_btn">
            <div className="btn_nav">Proyectos</div>
          </a>

          <div className="btn_nav">
            <Link to={"/acerca"}>
              <a className="text_btn">Acerca</a>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

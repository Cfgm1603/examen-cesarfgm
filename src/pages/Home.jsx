import { useRef, useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../App.css";

const Home = () => {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  });
  return (
    <div id="Home" className="content">
      <Navbar />
      <div className="container Raleway">
        <div className="content-wrapper">
          <div className="title">
            <h1>Hola Páramo! Soy César</h1>
          </div>
          <div className="image_container">
            <img
              className="image"
              src={require("../assets/memoji.png")}
              alt="Memoji mio"
            />
          </div>
        </div>
        <div className="Bienvenida">
          <b>
            ¡Bienvenidos! Esta es la primera vez que tengo tanta libertad
            creativa, lo que me hizo poner en duda si usar Bootstrap, al final
            me fui por puro CSS, ya que nunca he manejado Tailwind, esperemos no
            haga el archivo muy pesado.
          </b>
        </div>
      </div>
      <div className="Proyectos content-wrapper" id="proyectos">
        <div>
          <img
            // className={isVisible ? style.animate_phone : style.phone}
            className="phone"
            ref={myRef}
            src={require("../assets/phone.png")}
            alt="Imagen de un teléfono"
          />
        </div>
        <div className="txt_proyect">
          <h1>Avi - Unisabana</h1>
          <p>
            Desarrollo habilidades en Adobe XD con el fin de proponer una mejora
            en la interfaz de usuario y experiencia de usuario (UI/UX) de la IA
            de la Universidad de la Sabana, AVI.
            <br /> <br />
            Esta propuesta se encuentra actualmente en desarrollo.
          </p>
          {/* <Link to="/Proyectos">
            <button className="btn">Ver Proyectos</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

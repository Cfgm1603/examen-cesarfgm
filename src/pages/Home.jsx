import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="all">
      <div id="Home" className="content wholeContent">
        <Navbar />

        <div className="Welcome container Raleway">
          <div className="content-wrapper">
            <AnimatedOnScroll animationIn="headShake">
              <div className="title">
                <h1>Hola Páramo! Soy César</h1>
              </div>
            </AnimatedOnScroll>
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
              ¡Bienvenidos! Muchas gracias por tenerme en cuenta, me gusto mucho
              poder usar esto para expresarme, nunca había tenido completa
              libertad creativa, lo que me hizo poner en duda si usar Bootstrap
              ya que me limitaba a sus componentes, al final me fuí por puro
              CSS.
            </b>
          </div>
        </div>
        <div className="Proyectos content-wrapper" id="proyectos">
          <div className="animation_phone">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img
                className="phone"
                src={require("../assets/phone.png")}
                alt="Imagen de un teléfono"
              />
            </AnimatedOnScroll>
          </div>
          <div className="txt_proyect">
            <h1>Avi - Unisabana</h1>
            <p>
              Desarrollé habilidades en Adobe XD, muy similar a Figma, con el
              fin de proponer una mejora en la interfaz de usuario y la
              experiencia de usuario (UI/UX) de la Inteligencia Artificial de la
              Universidad de la Sabana, AVI. El objetivo es aumentar la cantidad
              de estudiantes que interactúan con AVI, además de mejorar su
              experiencia. <br /> <br />
              Esta propuesta se encuentra actualmente en desarrollo.
            </p>
          </div>
        </div>
        <div className="filler"></div>
      </div>
    </div>
  );
};
export default Home;

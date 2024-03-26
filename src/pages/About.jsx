import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  const handleSubmit = (e) => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const topicField = document.getElementById("topic");
    const contactNumber = document.getElementById("contactNumber");
    const message = document.getElementById("message");
    e.preventDefault();
    const messageToSend = `
      Nombre: ${nameField.value}
      Email: ${emailField.value}
      Tema: ${topicField.value}
      Número de Contacto: ${contactNumber.value}
      Mensaje: ${message.value}
    `;
    alert(messageToSend); // Puedes cambiar esto por cualquier otra forma de mostrar el mensaje
  };
  return (
    <div>
      <Navbar />
      <div className="all">
        <div className="aboutme">
          <img
            className="myphoto"
            src={require("../assets/my_photo.png")}
            alt="César Giralod"
          ></img>
          <div className="namer">
            <h1>César Felipe Giraldo Mora</h1>
          </div>
          <div className="bio">
            <i>
              Soy un estudiante de séptimo semestre de Ingeniería Informática, y
              me apasiona el desarrollo web. Tengo sólidas habilidades en
              tecnologías como React, JavaScript, HTML y CSS. Además, tengo
              experiencia trabajando con Python y Java, y he utilizado
              SpringBoot en proyectos de backend.
              <br></br> <br></br>
              Actualmente, formo parte del equipo de la célula de Innovación,
              Investigación, Transferencia & Emprendimiento de la Universidad de
              la Sabana, desempeñándome como diseñador UI/UX en AVI. Esta
              experiencia me ha permitido aplicar mis conocimientos en un
              entorno profesional, donde puedo contribuir con soluciones
              creativas y funcionales.
              <br></br>
              <br></br>
              Me considero una persona proactiva, responsable y con una fuerte
              motivación para seguir aprendiendo y creciendo profesionalmente.
              Me emociona enfrentar nuevos desafíos y buscar constantemente
              oportunidades para mejorar mis habilidades y conocimientos.
            </i>
          </div>
        </div>
        <div className="container Raleway">
          <div class="container_form">
            <h2>¡Contáctame!</h2>
            <p>Escríbeme tus comentarios o preguntas </p>
            <form>
              <div className="row">
                <div class="column">
                  <label className="label_text Raleway" for="Name">
                    Nombre
                  </label>
                  <br></br>
                  <input type="text" placeholder="" id="name"></input>
                </div>

                <div class="column">
                  <label className="label_text Raleway" for="Email">
                    Email
                  </label>
                  <br></br>
                  <input type="text" placeholder="" id="email"></input>
                </div>
              </div>
              <div className="row">
                <div class="column">
                  <label className="label_text Raleway" for="Name">
                    Tema
                  </label>
                  <br></br>
                  <input type="text" placeholder="" id="topic"></input>
                </div>

                <div class="column">
                  <label className="label_text Raleway" for="Email">
                    Número de Contacto
                  </label>
                  <br></br>
                  <input type="text" placeholder="" id="contactNumber"></input>
                </div>
              </div>
              <div className="row">
                <label className="label_text  Raleway" for="Message">
                  Mensaje
                </label>
                <textarea
                  className="Raleway"
                  id="message"
                  placeholder="Escribe tu mensaje aquí"
                  rows={3}
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn">
                <b>Enviar</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    contactNumber: "",
    message: "",
  });
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
      <div className="container Raleway">
        <div class="container_form">
          <h2>!Contactame!</h2>
          <p>Escribeme tus comentarios o preguntas</p>
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
  );
};
export default About;

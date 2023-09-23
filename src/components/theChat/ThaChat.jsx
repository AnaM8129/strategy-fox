import React, { useState } from "react";
import Navbar from "../navBar/Navbar.jsx";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";

const TheChat = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [messages, setMessages] = useState([
    {
      sender: "expert",
      text: "¡Hola!",
    },
    {
      sender: "expert",
      text: "Cuéntame tus dudas...",
    },
  ]);

  const sendMessage = (data) => {
    console.log(data);
    setMessages([
      ...messages,
      {
        sender: "me",
        text: data.text, // Sin comillas alrededor de data.text para que se evalúe correctamente
      },
    ]);
    reset();
  };

  const functionNavigate2 = () => {
    navigate("/foro");
  };

  const closeSession = () => {
    navigate("/");
  };
  return (
    <main className="main-foro">
      <header className="main-foro_header">
        <div className="main-foro_header_div">
          <img className="main-foro_header_img" src={logo} />
        </div>
        <h1 className="main-foro_header_title">Foro de aprendizaje</h1>
      </header>
      <section>
        <button className="close-session" onClick={closeSession}>
          Cerrar sesión
        </button>
        <p className="main-foro_username">User name</p>
        <p className="main-foro_text">
          Tengo 23 años, actualmente son estudiante de administración y estoy en
          la plataforma para ampliar mi aprendizaje sobre análisis del mercado.{" "}
        </p>
        <div className="main-foro_followContainer">
          <div className="main-foro_followContainer_div">
            <strong className="main-foro-numbers">352</strong>{" "}
            <p className="main-foro_letters">Seguidores</p>
          </div>
          <div className="main-foro_followContainer_div">
            <strong className="main-foro-numbers">15k</strong>{" "}
            <p className="main-foro_letters">Seguidos</p>
          </div>
        </div>
      </section>
      <section>
        <div className="main-foro_linksContainer">
          <div
            className="main-foro_linksContainer_text"
            onClick={functionNavigate2}
          >
            Pregúntale a la comunidad
          </div>
          <div className="main-foro_linksContainer_text">
            Pregúntale a un experto
          </div>
        </div>
      </section>
      <section className="messages-container">
        {messages.map((message, index) => (
          <div
            className={
              message.sender === "expert" ? "messages-expert" : "messages-me"
            }
            key={index}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </section>
      <form onSubmit={handleSubmit(sendMessage)}>
        <div className="input-container">
          <input
            className="input-container_input"
            placeholder="Realiza preguntas"
            {...register("text")}
          />
          <button className="input-container_button">
            <AiOutlineSend className="input-container_icon" />
          </button>
        </div>
      </form>
      <Navbar />
    </main>
  );
};

export default TheChat;

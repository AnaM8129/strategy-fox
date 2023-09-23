import React, { useState } from "react";
import Navbar from "../navBar/Navbar.jsx";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import fullheart from "../../assets/fullheart.png";
import emptyheart from "../../assets/emptyheart.png";
import { useNavigate } from "react-router-dom";
const Foro = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const navigate = useNavigate();

  const changeHeart = () => {
    setActive(!active);
  };

  const changeHeart2 = () => {
    setActive2(!active2);
  };

  const functionNavigate = () => {
    navigate("/chat");
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
          <div
            className="main-foro_linksContainer_text"
            onClick={functionNavigate}
          >
            Pregúntale a un experto
          </div>
        </div>
        <aside className="main-foro_message">
          <div style={{ display: "flex" }}>
            <FaUserCircle className="main-foro_message_icon" />
            <div>
              <p className="main-foro_message_name">Natalia Parra</p>
              <p className="main-foro_message_text">
                ¿Cómo puedo velar para que en mi emprendimiento haya un proceso
                de co-creación efectivo y enfocado?
              </p>
              <section className="main-foro_message2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUserCircle className="main-foro_message_icon2" />
                  <p className="main-foro_message_name">Juan Gomez</p>
                </div>
                <p className="main-foro_message_text">
                  Se debe hacer con pocas personas, debe tener un orden
                  específico y trabajarse por las largas horas.
                </p>
              </section>
            </div>
          </div>
          <div className="main-foro_message_links">
            <img
              onClick={changeHeart2}
              src={active2 ? fullheart : emptyheart}
            />
            <BiSolidShareAlt className="main-foro_message_links_link" />
            <MdSaveAlt className="main-foro_message_links_link" />
          </div>
        </aside>
        <aside className="main-foro_message">
          <div style={{ display: "flex" }}>
            <FaUserCircle className="main-foro_message_icon" />
            <div>
              <p className="main-foro_message_name">Daniel Pérez</p>
              <p className="main-foro_message_text">
                ¿Cómo puedo hacer que más personas conozcan mi emprendimiento?
              </p>
              <section className="main-foro_message2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUserCircle className="main-foro_message_icon2" />
                  <p className="main-foro_message_name">Ana Cano</p>
                </div>
                <p className="main-foro_message_text">
                  Podrías hacer uso de las redes sociales como instagram o
                  Faceboook. Ambas cuentan con muchas herramientas para
                  emprendedores.
                </p>
              </section>
            </div>
          </div>
          <div className="main-foro_message_links">
            <img onClick={changeHeart} src={active ? fullheart : emptyheart} />
            <BiSolidShareAlt className="main-foro_message_links_link" />
            <MdSaveAlt className="main-foro_message_links_link" />
          </div>
        </aside>
      </section>
      <Navbar />
    </main>
  );
};

export default Foro;

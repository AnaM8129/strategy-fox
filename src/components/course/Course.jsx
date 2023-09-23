import React, { useContext, useRef } from "react";
import Navbar from "../navBar/Navbar.jsx";
import { BiSolidUserCircle } from "react-icons/bi";
import sound from "../../assets/audio.mp3";

const Course = () => {
  const audioRef = useRef(sound);

  return (
    <main className="main-course">
      <div className="main-levels_userContainer">
        <BiSolidUserCircle className="main-levels_userContainer_icon" />
        <div className="main-levels_nameContainer">
          <p></p>
          <p style={{ marginTop: "-10px" }}>user name</p>
        </div>
      </div>
      <h1 className="main-course_title">Nivel 01</h1>
      <div className="main-course_audioContainer">
        <audio
          className="main-course_audio"
          ref={audioRef}
          src="https://www.cjoint.com/doc/23_09/MIxhj0wSfCs_tips-de-finanzas-para-emprendedores-5-hacks-1-.mp3"
          controls
        />
        <p style={{ color: "orange", fontSize: "12px" }}>
          Reproduce el capítulo
        </p>
      </div>
      <p className="main-course_text">
        En este capítulo, aprenderás a llevar a cabo un proceso estratégico
        fácil que te permitirá pensar en la gestión diaria de un negocio.
        También se detallarán las etapas de Estramipyme, centrándonos en el
        diagnóstico
      </p>
      <hr className="main-levels_line" />
      <p className="main-course_text">
        Ahora realiza las siguientes preguntas para poner a prueba tus
        conocimientos
      </p>
      <button className="main-course_button">Comenzar</button>
      <Navbar />
    </main>
  );
};

export default Course;

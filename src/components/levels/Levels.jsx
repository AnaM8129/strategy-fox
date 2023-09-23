import { React } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillRead } from "react-icons/ai";
import Navbar from "../navBar/Navbar.jsx";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Levels = () => {
  const navigateFunction = () => {
    navigate("/courses");
  };
  const navigate = useNavigate();
  return (
    <main className="main-levels">
      <div className="main-levels_userContainer">
        <BiSolidUserCircle className="main-levels_userContainer_icon" />
        <div className="main-levels_nameContainer">
          <p>HOLA</p>
          <p style={{ marginTop: "-10px" }}>User name</p>
        </div>
      </div>
      <hr className="main-levels_line" />
      <p className="main-levels_text">
        Inicia tu ruta de aprendizaje estratégico
      </p>
      <div className="main-levels_barContainer">
        <div className="main-levels_bar">
          <div className="main-levels_bar_secondBar" />
        </div>
        <p className="main-levels_completedText">1/5 completed</p>
      </div>
      <section className="main-levels_levelsSection">
        <div className="main-levels_level" onClick={navigateFunction}>
          <AiFillRead className="main-levels_level_icon" />
          <p className="main-levels_level_number">Nivel 01</p>
          <p className="main-levels_level_text">Aprende y descubre</p>
        </div>
        <div className="main-levels_level" onClick={navigateFunction}>
          <AiFillQuestionCircle className="main-levels_level_icon" />
          <p className="main-levels_level_number">Nivel 02</p>
          <p className="main-levels_level_text">
            Conoce ejemplos y aplicaciones
          </p>
        </div>
        <div className="main-levels_level" onClick={navigateFunction}>
          <BsPencilFill className="main-levels_level_icon" />
          <p className="main-levels_level_number">Nivel 03</p>
          <p className="main-levels_level_text">
            Practica realizando actividades
          </p>
        </div>
        <div className="main-levels_level" onClick={navigateFunction}>
          <BiMoneyWithdraw className="main-levels_level_icon" />
          <p className="main-levels_level_number">Nivel 04</p>
          <p className="main-levels_level_text">Su ámbito de aplicación</p>
        </div>
      </section>
      <Navbar />
    </main>
  );
};

export default Levels;

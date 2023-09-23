import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import Navbar from "../navBar/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate("/course");
  };

  const showAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No has desbloqueado estos cursos!",
    });
  };
  const arrayCourses = [
    {
      number: "01",
      name: "Proceso estratégico fácil",
    },
    {
      number: "02",
      name: "Metodología de proceso estratégico",
    },
    {
      number: "03",
      name: "Herramientas útiles para analizar la información",
    },
    {
      number: "04",
      name: "Plantillas para el análisis del entorno externo",
    },
    {
      number: "05",
      name: "Herramientas para el análisis interno",
    },
    {
      number: "06",
      name: "El reto estratégico: síntesis del diagnóstico",
    },
  ];
  return (
    <main className="main-courses">
      <section className="main-courses_section">
        <h1 className="main-courses_title">CONTENIDO</h1>
        <div className="main-courses_course" onClick={navigateFunction}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="main-courses_number">01</div>
            <p className="main-courses_name">Diagnóstico</p>
          </div>
          <div className="main-courses_iconContainer">
            <BsFillPlayFill className="main-courses_iconContainer_icon" />
          </div>
        </div>
        {arrayCourses.map((course, index) => (
          <div className="main-courses_course" key={index} onClick={showAlert}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="main-courses_number">{course.number}</div>
              <p className="main-courses_name">{course.name}</p>
            </div>
            <div className="main-courses_iconContainer2">
              <AiFillLock className="main-courses_iconContainer_icon" />
            </div>
          </div>
        ))}
      </section>
      <Navbar />
    </main>
  );
};

export default Courses;

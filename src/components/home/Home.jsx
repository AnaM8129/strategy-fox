import { React, createContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext([]);
const Home = () => {
  const [username, setusername] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setusername(data.username);
    navigate("/levels");
  };
  return (
    <AppContext.Provider value={{ username, setusername }}>
      <main className="main-home">
        {/* <div className="main-home_divMenu">
        <RiMenu3Fill className="main-home_divMenu_iconMenu" />
      </div> */}
        <section className="main-home_header">
          <figure className="main-home_figure">
            <img className="main-home_image" src={logo} />
          </figure>
          <p style={{ color: "white" }}>STRATEGY</p>
          <h1 style={{ marginTop: "-10px", color: "white", fontSize: "30px" }}>
            FOX
          </h1>
        </section>
        <hr className="main-home_line" />
        <div className="main-home_textContainer">
          <p>
            Estramipyme es una estrategia para micronegocios, desarrollada por
            estudiates de MBA de la universidad EAFIT.
          </p>
          <p>
            Facilita tu proceso estratégico utilizando herramientas muy valiosas
            y recibe asesorías totalmente gratis.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main-home_loginContainer">
              <p style={{ fontWeight: "bold", letterSpacing: "0.5px" }}>
                ¡Inicia tu proceso!
              </p>
              <div className="main-home_loginContainer_inputContainer">
                <AiOutlineUser
                  className={errors.username ? "icon-red" : "icon-user"}
                />
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  className={
                    errors.username
                      ? "input-error"
                      : "main-home_loginContainer_input"
                  }
                  {...register("username", {
                    required: true,
                  })}
                />
              </div>
              {errors.username && <p className="error">Ingrese un usuario</p>}
              <button className="main-home_loginContainer_button">
                Inicia sesión
              </button>
            </div>
          </form>
        </div>
      </main>
    </AppContext.Provider>
  );
};

export default Home;

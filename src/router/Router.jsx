import Home from "../components/home/Home.jsx";
import Levels from "../components/levels/Levels.jsx";
import Courses from "../components/courses/Courses.jsx";
import Course from "../components/course/Course.jsx";
import Foro from "../components/foro/Foro.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheChat from "../components/theChat/ThaChat.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/chat" element={<TheChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

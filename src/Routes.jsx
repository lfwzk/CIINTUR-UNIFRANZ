
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { computer } from "./pages/computer";
import Home from "./App";
import { Notfound } from "./components/Notfound";

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Notfound/>} />
        <Login />
      
    </Routes>
    </>
  );
};

export default Rutas;

import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { PeliCrear } from "../../componentes/peliculas/PeliCrear";
import { PeliListar } from "../../componentes/peliculas/PeliListar";
import { PeliAdmin } from "../../componentes/peliculas/PeliAdmin";
import { PeliActualiar } from "../../componentes/peliculas/PeliActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/pelicre" element={<PeliCrear />} />
      <Route path="/pelilis" element={<PeliListar />} />
      <Route path="/peliadm" element={<PeliAdmin />} />

      <Route path="/peliact/:codigo" element={<PeliActualiar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

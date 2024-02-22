import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/portadas-oficiales/1.png";
import img2 from "../assets/portadas-oficiales/2.png";
import img3 from "../assets/portadas-oficiales/3.png";
import img4 from "../assets/portadas-oficiales/4.png";

const publications = [
  {
    title:
      "1) El Impacto del Covid-19 en la Industria Turística de Bolivia y Políticas y Estrategias para Reactivar el Turismo en Bolivia",
    image: img1,
    link: "/pagina1",
  },
  {
    title:
      "2) Impactos del Covid-19 en los Emprendimientos de Turismo de las Comunidades Nativas de Bolivia",
    image: img2,
    link: "/pagina2",
  },
  {
    title: "3) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Documento)",
    image: img3,
    link: "/pagina3",
  },
  {
    title: "3) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Gráficas)",
    image: img3,
    link: "/pagina3",
  },
  {
    title:
      "4) CIINTUR - Perfil del Turista Interno Bolivia 2021 -  Destinos turísticos preferidos",
    image: img4,
    link: "/pagina4",
  },
  {
    title:
      "5) CINTUR - Factores que inciden en el desarrollo turístico desde la perspectiva del turismo interno",
    image: img4,
    link: "/pagina5",
  },
  {
    title:
      "6) Propuesta Metodológica de Medición de Impactos Económicos de Eventos Turísticos en Bolivia",
    image: img4,
    link: "/pagina6",
  },
];

export const Information = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">PUBLICACIONES CIENTIFICAS </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {publications.map((publication, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-2">
                {publication.title}
              </h2>
              <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Descargar
                </button>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

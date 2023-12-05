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
      "El Impacto del Covid-19 en la Industria Turística de Bolivia y Políticas y Estrategias para Reactivar el Turismo en Bolivia",
    image: img1,
    link: "/pagina1",
  },

  {
    title:
      "Impactos del Covid-19 en los Emprendimientos de Turismo de las Comunidades Nativas de Bolivia",
    image: img3,
    link: "/pagina3",
  },
  {
    title: "Perfil del Turista Interno en Bolivia 2021",
    image: img4,
    link: "/pagina4",
  },
];

export const Information = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">PUBLICACIONES DESTACADAS</h1>
        <table className="table-auto w-full mb-6">
          <thead>
            <tr>
              <th className="px-4 py-2">Título</th>
              <th className="px-4 py-2">Portada</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((publication, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{publication.title}</td>
                <td className="border px-4 py-2">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={publication.image}
                      alt={`Portada ${index + 1}`}
                      className="w-32 h-auto rounded-md cursor-pointer"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer />
    </>
  );
};

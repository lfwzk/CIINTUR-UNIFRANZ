import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/portadas-oficiales/1.png";
import img2 from "../assets/portadas-oficiales/2.png";
import img3 from "../assets/portadas-oficiales/3.png";
import img4 from "../assets/portadas-oficiales/4.png";
import pdf1 from "../assets/documents/1.El_impacto_del_Covid-19_en_la_industria_turística.pdf";
import pdf2 from "../assets/documents/2.Impactos_del_COVID-19_en_los_emprendimientos-de-turismo-comunitario.pdf";
import pdf3 from "../assets/documents/3.CIINTUR-perfil-2021.pdf";
import pdf4 from "../assets/documents/4.CIINTUR-perfil.pdf";
import pdf5 from "../assets/documents/5.CIINTUR-factores.pdf";
import pdf6 from "../assets/documents/6.Propuesta_Metodológica.pdf";
const publications = [
  {
    title:
      "1) El Impacto del Covid-19 en la Industria Turística de Bolivia y Políticas y Estrategias para Reactivar el Turismo en Bolivia",
    image: img1,
    link: "/pagina1",
    pdf: pdf1,
  },
  {
    title:
      "2) Impactos del Covid-19 en los Emprendimientos de Turismo de las Comunidades Nativas de Bolivia",
    image: img2,
    link: "/pagina2",
    pdf: pdf2,
  },
  {
    title: "3) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Documento)",
    image: img3,
    link: "/pagina3",
    pdf: pdf3,
  },
  {
    title: "3) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Gráficas)",
    image: img3,
    link: "/pagina3",
    pdf: pdf4,
  },
  {
    title:
      "4) CIINTUR - Perfil del Turista Interno Bolivia 2021 -  Destinos turísticos preferidos",
    image: img4,
    link: "/pagina4",
    pdf: pdf5,
  },
  {
    title:
      "5) CINTUR - Factores que inciden en el desarrollo turístico desde la perspectiva del turismo interno",
    image: img4,
    link: "/pagina5",
    pdf: pdf6,
  },
  {
    title:
      "6) Propuesta Metodológica de Medición de Impactos Económicos de Eventos Turísticos en Bolivia",
    image: img4,
    link: "/pagina6",
    pdf: pdf6,
  },
];

export const Information = () => {
  const handleDownload = (pdfLink) => {
    // Descarga el archivo PDF al hacer clic en el botón de descarga
    window.open(pdfLink, "_blank");
  };

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">PUBLICACIONES CIENTIFICAS</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {publications.map((publication, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-2">
                {publication.title}
              </h2>
              <div className="flex justify-center">
                <button
                  className="bg-[#d2266b] hover:bg-[#A1C516] text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleDownload(publication.pdf)}
                >
                  Descargar PDF
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

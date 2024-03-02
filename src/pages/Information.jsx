import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/portadas-oficiales/1.png";
import img2 from "../assets/portadas-oficiales/5.png";
import img3 from "../assets/portadas-oficiales/3.png";
import img4 from "../assets/portadas-oficiales/4.png";
import img5 from "../assets/portadas-oficiales/factores.png";
import pdf1 from "../assets/documents/1.El_impacto_del_Covid-19_en_la_industria_turística.pdf";
import pdf2 from "../assets/documents/2.Impactos_del_COVID-19_en_los_emprendimientos-de-turismo-comunitario.pdf";
import pdf3 from "../assets/documents/3.CIINTUR-Perfil_del_Turista_Interno_Bolivia_2021.pdf";
import pdf3a from "../assets/documents/3.CIINTUR-perfil-2021.pdf";
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
    image: img3,
    link: "/pagina3",
    pdf: pdf2,
  },
  {
    title: "3) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Documento)",
    image: img4,
    link: "/pagina4",
    pdf: pdf3,
  },
  {
    title: "3A) CIINTUR - Perfil del Turista Interno Bolivia 2021 (Gráficas)",
    image: img4,
    link: "/pagina4",
    pdf: pdf3a,
  },
  {
    title:
      "3B) CIINTUR - Perfil del Turista Interno Bolivia 2021 -  Destinos turísticos preferidos",
    image: img4,
    link: "/pagina4",
    pdf: pdf4,
  },
  {
    title:
      "4) CINTUR - Factores que inciden en el desarrollo turístico desde la perspectiva del turismo interno",
    image: img5,
    link: "/pagina5",
    pdf: pdf5,
  },
  {
    title:
      "5) CIINTUR - Propuesta Metodológica de Medición de Impactos Económicos de Eventos Turísticos en Bolivia",
    image: img2,
    link: "/pagina2",
    pdf: pdf6,
  },
];

export const Information = () => {
  const handleDownload = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">PUBLICACIONES CIENTIFICAS</h1>
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
                <td className="border px-4 py-2">
                  {publication.title}
                  <div>
                    <div className="flex justify-center p-5">
                      {index >= 3 && index <= 5 ? (
                        <button
                          onClick={() => handleDownload(publication.pdf)}
                          className="bg-[#a3c119] hover:bg-[#f29517] text-gray-800 font-bold py-2 px-4 rounded"
                        >
                          Descargar PDF
                        </button>
                      ) : (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#a3c119] hover:bg-[#f29517] text-gray-800 font-bold py-2 px-4 rounded"
                        >
                          Detalles
                        </a>
                      )}
                    </div>
                  </div>
                </td>

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

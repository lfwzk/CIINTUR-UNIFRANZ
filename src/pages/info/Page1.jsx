import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img from "../../assets/portadas-oficiales/1.png";
import pdf1 from "../../assets/documents/1.El_impacto_del_Covid-19_en_la_industria_turística.pdf";

export const Page1 = () => {
  const handleDescargaPDF = () => {
    const link = document.createElement("a");
    link.href = pdf1;
    link.download = "descarga.pdf";
    link.click();
  };
  return (
    <div>
      <Header />
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 p-5  ">
                  <img
                    src={img}
                    alt=""
                    className="object-cover w-full lg:h-full rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl text-justify">
                    EL IMPACTO DEL COVID-19 EN LA INDUSTRIA TURÍSTICA DE BOLIVIA
                    Y ESTRATEGIAS PARA SALIR DE LA CRISIS
                  </h2>
                  <p className="inline-block mb-6 text-xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>Descripción</span>
                  </p>
                  <p className="max-w-md text-gray-700 dark:text-gray-400 text-justify">
                    La Covid-19 no solo ha afectado la salud de la población,
                    sino también ha deteriorado las economías y las industrias
                    de los países, una de ellas y la más afectada es, sin duda,
                    el turismo. El impacto de la Covid-19 en la industria
                    turística boliviana alertó que se perderían cerca de 3.020
                    millones de bolivianos en la gestión de 2020. Los
                    principales mercados de turismo receptivo de Bolivia
                    disminuyeron drásticamente sus viajes y el impacto derivado
                    de la ausencia de turismo provocó que más de 140.000
                    personas perdieran su fuente de empleo. Pero, sin duda, el
                    microempresario de turismo fue quien recibió el mayor
                    impacto, ya que cerca del 50% de las unidades productivas
                    cerraron operaciones en los meses siguientes al inicio de la
                    pandemia. Sin embargo, los empresarios bolivianos vieron en
                    la paralización una oportunidad para pensar y reinventarse a
                    partir de la migración al mundo informático.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600">
                    Autores
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    - Orlando Poma Loza <br />
                    -Viviana Valda Baldivieso <br />
                    -Ángela Loayza Céspedes <br />
                    -Carolina Patricia Soliz Limarino <br />
                    -Claudia Montserrat Lourdes Lizarazu Salles <br />
                    -Deysi Karla Janco De la Cruz <br />
                    -Nicole María García Miranda <br />
                    -Laura Poveda Palacios <br />
                    -Melania Fátima San Miguel Chacón <br />
                    - Rocy Marleny Mamani Limachi <br />
                    -Wendy Echalar Dávila <br />
                  </div>
                </div>
                <div className="mb-8 ">
                  <h2 className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                    Año de publicación
                  </h2>
                  <div>
                    <div className="flex flex-wrap -mb-2">
                      <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                        2020{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-white">
                  <button
                    className="w-full p-4 rounded-md lg:w-2/5 hover:bg-[#d2266b] bg-[#d2266b] flex items-center justify-center"
                    onClick={handleDescargaPDF}
                  >
                    Descargar{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                      alt="Icono de descarga"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

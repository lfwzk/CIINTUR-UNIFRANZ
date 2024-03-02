import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img from "../../assets/portadas-oficiales/3.png";
import pdf1 from "../../assets/documents/2.Impactos_del_COVID-19_en_los_emprendimientos-de-turismo-comunitario.pdf";

export const Page3 = () => {
  const handleDescargaPDF = () => {
    const link = document.createElement("a");
    link.href = pdf1;
    link.download = "descarga1.pdf";
    link.click();
  };
  return (
    <div>
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
                      IMPACTOS DEL COVID-19 EN LOS EMPRENDIMIENTOS DE TURISMO DE
                      LAS COMUNIDADES NATIVAS DE BOLIVIA
                    </h2>
                    <p className="inline-block mb-6 text-xl font-bold text-gray-700 dark:text-gray-400 ">
                      <span>Descripción</span>
                    </p>
                    <p className="max-w-md text-gray-700 dark:text-gray-400 text-justify">
                      El sector turístico en Bolivia, específicamente las
                      empresas de turismo comunitario (ETC), se ha visto
                      fuertemente afectado por la pandemia de COVID-19. Sin
                      embargo, hay esperanzas de recuperación en la segunda
                      mitad del 2021, ya que se espera que la demanda de turismo
                      se recupere. Es probable que la nueva ola de turistas
                      prefiera destinos que ofrezcan atractivos naturales,
                      actividades al aire libre y experiencias culturales
                      auténticas, todo lo cual se puede encontrar en las CTE de
                      Bolivia. Para aprovechar esta oportunidad, estas empresas
                      deben adoptar la transformación digital, incorporar nuevas
                      tecnologías en sus servicios y reinventar sus productos
                      comunitarios. Por ejemplo, Chalalan, pionera en CTE,
                      incorporó con éxito servicios turísticos en línea durante
                      el período de cuarentena. Se espera que otras CTE en todo
                      el país sigan el ejemplo y demuestren que el turismo
                      comunitario puede reinventarse.
                    </p>
                  </div>
                  <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600">
                      Autores
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      -Edwin Orlando Poma Loza <br />
                      - Lizeth Alison Quisbert Magueño <br />
                      - Ana Gabriela Mamani Ayala <br />
                    </div>
                  </div>
                  <div className="mb-8 ">
                    <h2 className="w-16 pb-1 mb-4 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                      Año de publicación
                    </h2>
                    <div>
                      <div className="flex flex-wrap -mb-2">
                        <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                          2021{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      className="w-full p-4 rounded-md lg:w-2/5 hover:bg-[#d2266b] bg-[#d2266b] flex items-center justify-center text-white"
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
    </div>
  );
};

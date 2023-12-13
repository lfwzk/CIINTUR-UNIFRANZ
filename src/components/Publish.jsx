import React from "react";
import portada1 from "../assets/portadas-oficiales/1.png";

import portada2 from "../assets/portadas-oficiales/impacto.png";
import portada3 from "../assets/portadas-oficiales/3.png";
import portada4 from "../assets/portadas-oficiales/4.png";

import aliado1 from "../assets/aliados/gams.png";
import aliado2 from "../assets/aliados/logo-sorata.png";
import aliado3 from "../assets/aliados/logowhite.png";
import aliado4 from "../assets/aliados/unifranz.jpeg";

export const Publish = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-center dark:text-white font-semibold lg:text-4xl mb-4 md:mb-6 md:text-3xl text-2xl text-gray-800 font-lato">
            PUBLICACIONES DESTACADAS
          </h2>
        </div>
        <div className="mx-auto max-w-screen-xl md:px-8 px-4 py-10">
          <div className="gallery gap-4 grid grid-cols-2 lg:grid-cols-4 md:gap-6 pswp-gallery sm:grid-cols-3 xl:gap-8">
            <a
              href="/pagina1"
              className="h-100 w-full rounded-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={portada1}
                alt="portada"
                className="h-full w-full object-cover transform transition duration-500 hover:scale-110"
              />
            </a>
            <a
              href="/"
              className="h-100 w-full rounded-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={portada2}
                alt="portada"
                className="h-full w-full object-cover transform transition duration-500 hover:scale-110"
              />
            </a>
            <a
              href="/pagina3"
              className="h-100 w-full rounded-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={portada3}
                alt="portada"
                className="h-full w-full object-cover transform transition duration-500 hover:scale-110"
              />
            </a>
            <a
              href="/pagina4"
              className="h-100 w-full rounded-md overflow-hidden hover:shadow-lg"
            >
              <img
                src={portada4}
                alt="portada"
                className="h-full w-full object-cover transform transition duration-500 hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div className="container mx-auto p-4 sm:p-10 mt-8">
          <h2 className="text-center dark:text-white font-semibold lg:text-4xl mb-4 md:mb-6 md:text-3xl text-2xl text-gray-800 font-lato">
            ALIADOS
          </h2>

          <div className="flex flex-wrap justify-center mx-auto dark:text-gray-400">
            {[
              { src: aliado1, alt: "aliado1" },
              { src: aliado3, alt: "aliado3" },
              { src: aliado4, alt: "aliado4" },
              { src: aliado2, alt: "aliado2" },
            ].map((aliado, index) => (
              <div
                key={index}
                className="flex justify-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-6 align-middle"
              >
                <img
                  src={aliado.src}
                  alt={aliado.alt}
                  className="w-auto h-24 rounded-md transform transition duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

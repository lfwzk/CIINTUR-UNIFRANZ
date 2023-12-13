import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../assets/proposals/metaverse.png";
import img3 from "../assets/proposals/mapa.png";
import { Link } from "react-router-dom";

export const Proposal = () => {
  return (
    <>
      <Header />

      <main className="p-10">
        <section className="py-6">
          <div className="container mx-auto p-4 sm:p-10">
            <div className="mb-16 space-y-4 text-center">
              <h1 className="text-4xl font-semibold leading">
                Propuestas Innovadoras
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
              <div className="card aspect-w-16 aspect-h-16 bg-base-200 rounded-xl overflow-hidden shadow-xl">
                <figure className="flex justify-center items-center h-full">
                  <Link to="/metaverso" className="no-underline text-black">
                    <img
                      className="object-cover w-full h-full rounded-xl transform transition duration-500 hover:scale-110"
                      src={img1}
                      alt="Metaverso de la Gastronomía Boliviana"
                    />
                  </Link>
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-xl font-semibold mb-2 text-center overflow-hidden whitespace-nowrap">
                    Metaverso de la Gastronomía Boliviana
                  </h2>
                </div>
              </div>

              <div className="card aspect-w-16 aspect-h-16 bg-base-200 rounded-xl overflow-hidden shadow-xl">
                <figure className="flex justify-center items-center h-full">
                  <Link
                    to="/elalto-interactivo"
                    className="no-underline text-black"
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl transform transition duration-500 hover:scale-110"
                      src={img3}
                      alt="El Alto Interactivo: Turismo Inmersivo en Realidad Aumentada"
                    />
                  </Link>
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-xl font-semibold mb-2 text-center overflow-hidden whitespace-nowrap">
                    El Alto Interactivo: Turismo Inmersivo en Realidad Aumentada
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

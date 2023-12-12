import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <Header />

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:divide-x md:divide-gray-400">
          <div className="md:pr-8 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">Contacto</h1>

            <div className="mt-6 space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Av. del Aeropuerto Internacional de El Alto N°1015</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>Telf.: (2) 2823421 / (2) 2825769</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>unifranz@unifranz.edu.bo</span>
              </p>

              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
                <span>Ciintur </span>
              </p>
            </div>
          </div>
          <div className="md:pl-8 mt-6 md:mt-0">
            <div className="aspect-w-3 aspect-h-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15301.381786101823!2d-68.166377!3d-16.5086489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf987d0d61c3%3A0xee9818e90cd630b3!2sUnifranz%20El%20Alto!5e0!3m2!1ses-419!2sbo!4v1699236254982!5m2!1ses-419!2sbo"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

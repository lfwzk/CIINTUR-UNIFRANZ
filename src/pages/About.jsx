import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const About = () => {
  return (
    <div>
      <Header />

      <section className="items-center py-10 bg-gray-100 font-lato dark:bg-gray-800">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <h1 className="text-4xl font-bold leading-tight dark:text-white">
                  {" "}
                  ACERCA DEL CIINTUR
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-[#A1C516]"></div>
                  <div className="flex-1 h-2 bg-[#d2266b]"></div>
                  <div className="flex-1 h-2 bg-[#F49A0F]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto lg:max-w-3xl">
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Situación{" "}
                    </p>
                    <p className="text-gray-700 dark:text-gray-500 text-justify">
                      La situación que atravesó el sector turístico durante la
                      pandemia y su paulatina recuperación y reestructuración
                      post-pandemia abre las puertas a un nuevo contexto donde
                      los profesionales, la academia y los empresarios del
                      sector vislumbran la necesidad de una transformación y
                      adaptación del mismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      Escenario
                    </p>
                    <p className="text-gray-700 dark:text-gray-500 text-justify">
                      En este escenario, la carrera de Administración de
                      Hotelería y Turismo de UNIFRANZ El Alto, en mayo del 2020,
                      presentó el Centro de Investigación, Innovación y
                      Transformación Digital en Turismo (CIINTUR), a partir de
                      la realización del primer estudio de investigación “El
                      Impacto del Covid-19 en la industria del Turismo en
                      Bolivia”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                    <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                  </div>
                </div>
                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
              </div>
              <div>
                <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      {" "}
                      Investigacion científica
                    </p>
                    <p className="text-gray-700 dark:text-gray-500 text-justify">
                      Desde la academia, es importante que se puedan consolidar
                      centros de investigación científica especializados en
                      turismo, que identifiquen temas de relevancia
                      investigativa enfocados a la innovación y transformación
                      digital para la gestión turística. Es momento de
                      identificar, vincular y apoyar a los actores y personas
                      relacionadas al sector turístico, a través de un
                      acompañamiento que brinde información confiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 font-lato dark:bg-gray-800 text-white py-5">
        <div className="relative flex flex-col items-center">
          <h1 className="text-4xl font-bold leading-tight dark:text-white text-black">
            {" "}
            OBJETIVOS{" "}
          </h1>
          <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
            <div className="flex-1 h-2 bg-[#A1C516]"></div>
            <div className="flex-1 h-2 bg-[#d2266b]"></div>
            <div className="flex-1 h-2 bg-[#F49A0F]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300 text-black">
              OBJETIVO GENERAL
            </h2>
            <p className="text-md text-gray-700 dark:text-gray-300 text-justify">
              Contribuir a Bolivia mediante el fortalecimiento del sector
              turístico, a través de la investigación científica y el diseño de
              propuestas y aportes académicos enfocados a un turismo responsable
              y sostenible, que promuevan la gestión cultural y la asistencia a
              micro y pequeñas empresas.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300 text-black">
              OBJETIVOS ESPECÍFICOS
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 text-justify">
              <li>
                Producir documentos investigativos, sustentando la formación
                académica de nuestros estudiantes, generando respuestas
                concretas a problemáticas del sector.
              </li>
              <li>
                Fortalecer la perspectiva del desarrollo turístico sustentable
                mediante el análisis de temas de interés y actualidad.
              </li>
              <li>
                Promover asistencia técnica a municipios y MyPEs del sector
                turístico.
              </li>
              <li>
                Generar espacios de debate, análisis y propuestas de inclusión
                transversal con temas relevantes para la actividad turística,
                promoviendo la gestión cultural y el cuidado ambiental,
                considerando la vinculación y participación de otras carreras de
                la sede.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl font-bold leading-tight dark:text-white text-black">
              {" "}
              PILARES DEL CIINTUR{" "}
            </h1>
            <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
              <div className="flex-1 h-2 bg-[#A1C516]"></div>
              <div className="flex-1 h-2 bg-[#d2266b]"></div>
              <div className="flex-1 h-2 bg-[#F49A0F]"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-[#A1C516] bg-[#A1C516] text-black">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-center">
                    ESTUDIOS DE INVESTIGACIÓN
                  </h4>
                </div>
                <p className="mt-3 leadi dark:text-gray-900 text-center">
                  Estudios de investigación: Realización de análisis y estudios
                  de investigación en el sector turístico.{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-[#F49A0F] dark:text-gray-900 bg-[#F49A0F]">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-center">
                    ASESORÍA TÉCNICA
                  </h4>
                </div>
                <p className="leadi text-center">
                  Asesoría técnica: Asistencia a micro y pequeñas empresas del
                  rubro turístico, municipios e instituciones vinculadas al
                  sector.
                </p>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#206DB5] ">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-center">
                    GENERACIÓN DE PROPUESTAS MULTIDISCIPLINARIAS
                  </h4>
                </div>
                <p className="leadi dark:text-gray-800 text-center">
                  Generación de propuestas multidisciplinarias: Generación de
                  propuestas de inclusión transversal (curricular) en prestación
                  de servicios, cuidado ambiental y gestión cultural, con la
                  participación de otras carreras de la sede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

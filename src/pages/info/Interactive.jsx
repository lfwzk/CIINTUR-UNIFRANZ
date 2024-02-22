import React from "react";
import Iframe from "react-iframe";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img1 from "../../assets/proposals/vr.png";
import img2 from "../../assets/proposals/qr.jpeg";

export const Interactive = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto p-4 sm:p-10 mt-8 text-gray-800 mb-6 dark:text-gray-200">
        <h1 className="text-4xl font-semibold mb-6">
          Ruta turística interactiva de la ciudad de El Alto
        </h1>
        <p className="text-lg text-gray-800  dark:text-gray-200">
          Objetivo: Implementar el uso de nuevas tecnologías en la actividad
          turística, que permita generar un valor agregado a cualquier destino
          turístico de Bolivia. En este caso en particular, se busca brindar una
          experiencia de turismo inmersivo en la ciudad de El Alto, apreciando
          algunos atractivos identificados en realidad aumentada.
        </p>
        <br />
        <p className="text-lg text-gray-800 mb-6 dark:text-gray-200">Equipo:</p>
        <ul className="list-disc pl-6 text-lg mb-6">
          <li>Rocy Marleny Mamani - Docente investigadora</li>
          <li>Omar Belisario Choque Ticona - Docente investigador</li>
          <li>
            Ana Patricia Huanca Paco - Docente y fundadora del Colectivo Paisaje
            Caminante, que junto con estudiantes de la asignatura Rutas y Mapas
            Digitales elaboraron el mapa con los atractivos identificados.
          </li>
          <li>
            Bismark Deynor Condori Ruiz – Estudiante de Sistemas que colaboró
            con el diseño en realidad aumentada.
          </li>
        </ul>
        <p className="text-lg text-gray-800 mb-6 dark:text-gray-200">
          Universidad Privada Franz Tamayo – Diciembre 2023
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9 mt-8">
          <Iframe
            src="https://umap.openstreetmap.fr/es/map/el-alto-interactivo-turismo-inmersivo-en-ar_996811?scaleControl=false&miniMap=true&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true&datalayers=3071335%2C3072665%2C3072671%2C3072741%2C3072745%2C3072765%2C3072769#13/-16.5343/-68.1611"
            width="100%"
            height="700px"
            className="rounded-t-xl"
          />
        </div>
      </div>
      <div className="container mx-auto p-4 sm:p-10 mt-8 text-center">
        <h1 className="text-4xl font-semibold mb-6">
          Nuestra experiencia en realidad aumentada
        </h1>
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              También puedes ver la experiencia en el siguiente QR
            </p>
            <div className="flex justify-center">
              <img
                src={img2}
                alt="Captura de pantalla del QR"
                className="rounded-lg shadow-md mt-4"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

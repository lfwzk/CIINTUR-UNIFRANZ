import React from "react";
import Iframe from "react-iframe";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img1 from "../../assets/proposals/vr.png";
import img2 from "../../assets/proposals/qr.jpeg";

export const Interactive = () => {
  return (
    <div className=" min-h-screen">
      <Header />

      <div className="container mx-auto p-4 sm:p-10 mt-8">
        <h1 className="text-4xl font-semibold mb-6">
          Ruta turística interactiva de la ciudad de El Alto
        </h1>
        <p>
          Objetivo: Implementar el uso de nuevas tecnologías en la actividad
          turística, que permita generar un valor agregado a cualquier destino
          turístico de Bolivia. En este caso en particular, se busca brindar una
          experiencia de turismo inmersivo en la ciudad de El Alto, apreciando
          algunos atractivos identificados en realidad aumentada. Equipo: Rocy
          Marleny Mamani – Docente investigadora Omar Belisario Choque Ticona –
          Docente investigador Ana Patricia Huanca Paco – Docente y fundadora
          del Colectivo Paisaje Caminante, que junto con estudiantes de la
          asignatura Rutas y Mapas Digitales elaboraron el mapa con los
          atractivos identificados. Bismark Deynor Condori Ruiz – Estudiante de
          Sistemas que colaboró con el diseño en realidad aumentada. Universidad
          Privada Franz Tamayo – Diciembre 2023
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
          <Iframe
            src="https://umap.openstreetmap.fr/es/map/el-alto-interactivo-turismo-inmersivo-en-ar_996811?scaleControl=false&miniMap=true&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true&datalayers=3071335%2C3072665%2C3072671%2C3072741%2C3072745%2C3072765%2C3072769#13/-16.5343/-68.1611"
            width="100%"
            height="700px"
            className="rounded-t-xl"
          />
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-10 mt-8">
        <h1 className="text-4xl font-semibold mb-6">
          Nuestra experiencia en realidad aumentada
        </h1>

        {/* Contenedor principal con flex para presentar los mockups lado a lado */}
        <div className="flex flex-col sm:flex-row">
          {/* Segundo mockup (teléfono) */}
          <div className="mockup-phone">
            <div className="camera bg-gray-700 h-2 mb-2"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 text-center py-4">
                Tambien puedes ver la experiencia en el siguiente QR
                <img
                  src={img2}
                  alt="Captura de pantalla 2"
                  className="rounded-lg shadow-md max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Iframe from "react-iframe";
import manual from "../../assets/proposals/manual.jpeg";

export const Metaverso = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto p-4 sm:p-10 mt-8">
        <h1 className="text-4xl font-semibold mb-6">
          Metaverso de la Gastronomía Boliviana
        </h1>
        <div className="text-lg text-gray-800 mb-6 dark:text-gray-200">
          <p>
            Objetivo: Aplicar la tendencia digital y virtual en la organización
            de eventos (aplicación principal post pandemia del COVID 19 y
            actualidad).
          </p>
          <p>Centro de convenciones Plataforma metaverso: Spatial.io</p>
          <p>Docente: Reyna Patricia Guerra Camacho</p>
          <p>Estudiantes:</p>
          <ul className="list-disc pl-6">
            <li>Meliza Rocio Achu Flores</li>
            <li>Leznny Nashira Alarcón Guzmán</li>
            <li>Marcos Quispe Chauca</li>
            <li>Luis Adolfo Marín Castro</li>
            <li>Alexandra Quea Patzy</li>
          </ul>
          <p>
            Universidad Privada Franz Tamayo / Proyecto de asignatura - 2do.
            semestre 2023
          </p>
          <p>
            Si quieres vivir la experiencia completa visita este{" "}
            <a
              href="https://www.spatial.io/s/Eventos2023s-unifranz-65525cbd2fbd271099c2014a?share=8597670512053008360"
              className="text-green-500"
            >
              link🔗
            </a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
          <Iframe
            src="https://www.spatial.io/s/Eventos2023s-unifranz-65525cbd2fbd271099c2014a?share=8597670512053008360"
            width="100%"
            height="800px"
            className="rounded-t-xl"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

import aliado1 from "../assets/aliados/gams.png";
import aliado2 from "../assets/aliados/logo-sorata.png";
import aliado3 from "../assets/aliados/logowhite.png";
import aliado4 from "../assets/aliados/unifranz.jpeg";
export const Alliance = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-center dark:text-white font-semibold lg:text-4xl mb-4 md:mb-6 md:text-3xl text-2xl text-gray-800 font-lato">
            ALIADOS{" "}
          </h2>
        </div>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img
              src={aliado1}
              alt="aliado"
              className="w-auto h-24 rounded-md transform transition duration-500 hover:scale-110"
            />
          </div>

          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img
              src={aliado3}
              alt="aliado"
              className="w-auto h-24 rounded-md transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img
              src={aliado4}
              alt="aliado"
              className="w-auto h-24 rounded-md transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img
              src={aliado2}
              alt="aliado"
              className="w-auto h-24 rounded-md transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

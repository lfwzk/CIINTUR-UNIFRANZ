import Iframe from "react-iframe";

const Mapview = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-12 text-neon-pink" >Ubicación</h1>
      <p className="text-center text-xl mt-6">
        Estamos ubicados en la Av. 6 de Agosto N° 2530, Edificio "El Pórtico",
        Piso 8, Oficina 8B, Zona de Sopocachi, La Paz - Bolivia
      </p>
      <p className="text-center text-xl mt-6">
        Teléfono: 591-2-243-0808 <br />
        Celular: 591-775-58878
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  borderRadius: "100px",  }}>
  <Iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.632221093619!2d-68.1509727907289!3d-16.494150084182884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8940f8f995%3A0xcdff16e3857dd25b!2sVirtus-Technology!5e0!3m2!1ses!2sbo!4v1692720985368!5m2!1ses!2sbo"
    width="700"
    height="550"
    style={{
      border: "0",
      borderRadius: "109px",  // Redondea los bordes
    }}
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
</div>

    </>
  );
};

export default Mapview;

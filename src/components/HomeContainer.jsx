import React from "react";
import DeliveryIMG from "../assets/delivery.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
        <div className="flex items-center gap-2 justify-center px-4 py-1 rounded-full bg-[#023e8a]">
          <p className="text-base font-semibold text-white">Moto y Bicicleta</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={DeliveryIMG}
              className="w-full h-full object-contain"
              alt="logo_delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold text-headingColor">
          La Mejor App de Comida de
          <span className="text-[#023e8a] text-[3rem] lg:text-[5rem]">
            {" "}
            Tu Ciudad
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
          Nos encanta alegrarte el día, es por eso que FP Delivery fue creado.
          Somos de Santiago del Estero, Provincia de Argentina.
        </p>
        <button
          type="button"
          className="w-full md:w-auto px-4 py-2 rounded-lg bg-[#023e8a] font-bold text-white hover:bg-primary hover:text-[#023e8a] duration-100 transition-all ease-in-out"
        >
          ¡Pedí Ahora!
        </button>
      </div>
      <div className="py-2 flex-1 bg-slate-600"></div>
    </section>
  );
};

export default HomeContainer;

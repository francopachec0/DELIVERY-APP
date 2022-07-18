import React from "react";
import DeliveryIMG from "../assets/delivery.png";

const HomeContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
        <div className="flex items-center gap-2 justify-center px-4 py-1 rounded-full bg-[#023e8a]">
          <p className="text-base font-semibold text-white">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={DeliveryIMG}
              className="w-full h-full object-contain"
              alt="logo_delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold text-headingColor">
          The Fastest Delivery App in{" "}
          <span className="text-[#023e8a] text-[3rem] lg:text-[5rem]">Your City</span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
          We enjoy to make you happy with food, that is why FP Delivery was
          created. We are from Santiago del Estero, province of Argentina.
        </p>
        <button
          type="button"
          className="w-full md:w-auto px-4 py-2 rounded-lg bg-[#023e8a] font-bold text-white"
        >
          ¡Order Now!
        </button>
      </div>
      <div className="py-2 flex-1"></div>
    </div>
  )
};

export default HomeContainer;

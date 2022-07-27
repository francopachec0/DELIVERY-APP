import { motion } from "framer-motion";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { categories } from "../utils/data";
import RowContainer from "./RowContainer";

const MenuContainer = () => {
    
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 mr-auto before:bg-gradient-to-tr from-[#0653b9] to-[#04326d] transition-all ease-in-out duration-100">
          Nuestros Platos Calientes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
            
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;

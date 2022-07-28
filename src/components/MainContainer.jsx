import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";

const MainContainer = () => {
  // eslint-disable-next-line
  const [{ foodItems }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#0653b9] to-[#04326d] transition-all ease-in-out duration-100">
            Nuestras Frutas
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-[#246cca] hover:bg-[#023e8a] cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex justify-center items-center"
              onClick={() => setScrollValue(-630)}
            >
              <MdChevronLeft size={20} className="text-base text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-[#246cca] hover:bg-[#023e8a] cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex justify-center items-center"
              onClick={() => setScrollValue(630)}
            >
              <MdChevronRight size={20} className="text-base text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((i) => i.category === "frutas")}
        />
      </section>

      <MenuContainer />
    </div>
  );
};

export default MainContainer;

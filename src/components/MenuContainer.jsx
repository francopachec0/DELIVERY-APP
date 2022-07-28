import { motion } from "framer-motion";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { categories } from "../utils/data";
import RowContainer from "./RowContainer";
import { IoFastFood } from "react-icons/io5";

const MenuContainer = () => {
  const [filter, setFilter] = useState("pollo");
  // eslint-disable-next-line
  const [{ foodItems }, dispatch] = useStateValue(); 

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 mr-auto before:bg-gradient-to-tr from-[#0653b9] to-[#04326d] transition-all ease-in-out duration-100">
          Nuestros Platos
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((c) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={c.id}
                className={`group ${
                  filter === c.urlParamName ? "bg-[#023e8a]" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-[#023e8a]`}
                onClick={() => setFilter(c.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === c.urlParamName ? "bg-white" : "bg-[#023e8a]"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  {c.icon ? c.icon : <IoFastFood size={24} />}
                </div>
                <p
                  className={`text-sm ${
                    filter === c.urlParamName
                      ? "text-white"
                      : "text-headingColor"
                  } group-hover:text-white`}
                >
                  {c.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;

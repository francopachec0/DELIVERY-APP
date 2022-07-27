import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MdShoppingCart } from "react-icons/md";

const RowContainer = ({ flag, data, scrollValue }) => {
  //console.log(data);

  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data.map((item) => {
          return (
            <div
              key={item?.id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-6 backdrop-blur-lg hover:drop-shadow-xl flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <div className="w-40 h-40 -mt-8 drop-shadow-2xl">
                  <img
                    src={item?.imageURL}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-[#023e8a] flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                >
                  <MdShoppingCart className="text-white" size={20} />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor text-base md:text-lg">
                  {item?.name}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-[#023e8a]">$</span>{" "}
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RowContainer;

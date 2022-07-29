import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill, RiDeleteBin5Fill } from "react-icons/ri";
import EmptyCart from "../assets/emptyCart.svg";

import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartConteiner = () => {

  const [{ cartShow }, dispatch] = useStateValue();

  const showCart = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div onClick={showCart} whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace size={24} className="text-textColor" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Tu Carrito</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
        >
          Limpiar <RiDeleteBin5Fill size={24} />
        </motion.p>
      </div>

      <div className="w-full h-full bg-cartBg flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/delivery-app-afd43.appspot.com/o/Images%2F1658884217574-f1.png?alt=media&token=e36529ce-facb-4f37-abbd-309f3eb5df29"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />

            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Producto</p>
              <p className="text-sm block text-gray-300 font-semibold">$ 800</p>
            </div>

            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50 " />
              </motion.div>

              <p className="w-6 h-6 text-sm rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>

              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50 " />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 bg-cartItem flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ 950</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Envío</p>
              <p className="text-gray-400 text-lg">$ 190</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-white text-xl font-semibold">Monto Final</p>
              <p className="text-white text-xl font-semibold">
               $ 1140
              </p>
            </div>

            <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-[#023e8a] to-[#023e8a] text-white text-lg my-2 hover:shadow-lg"
              >
                COMPRAR
              </motion.button>

            
          </div>
      </div>
    </motion.div>
  );
};

export default CartConteiner;

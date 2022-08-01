import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import EmptyCart from "../assets/emptyCart.svg";

import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import CartItem from "./CartItem";

const CartConteiner = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);

  const showCart = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    //console.log(tot);
  }, [tot, flag, cartItems]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };


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
          onClick={clearCart}
        >
          Limpiar <RiDeleteBin5Fill size={24}/>
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg flex flex-col">
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {cartItems &&
              cartItems.map((i) => (
                <CartItem key={i.id} item={i} setFlag={setFlag} flag={flag} />
              ))}
          </div>

          <div className="w-full flex-1 bg-cartItem flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Envío</p>
              <p className="text-gray-400 text-lg">$ 190</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-white text-xl font-semibold">Monto Final</p>
              <p className="text-white text-xl font-semibold">$ {tot + 190}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-[#023e8a] to-[#023e8a] text-white text-lg my-2 hover:shadow-lg"
              >
                COMPRAR
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Logueate para Comprar
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Agrega Productos a tu Carrito
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartConteiner;

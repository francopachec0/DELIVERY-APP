import React, { useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/avatar.png";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { Link } from "react-router-dom";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line no-unused-vars
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* ---------------------------------- desktop and tablet --------------------------------------- */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="logo"
            className="w-12 object-cover"
            whileTap={{ scale: 0.6 }}
          />
          <p className="text-[#023e8a] text-xl font-bold">FP Delivery</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer ">
              <Link to={'/'}>Inicio</Link>
            </li>
            <li className="text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer ">
            <Link to={'/menu'}>Menú</Link>
            </li>
            <li className="text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer ">
              Sobre Nosotros
            </li>
            <li className="text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer ">
              Contacto
            </li>
          </motion.ul>
          <div
            onClick={showCart}
            className="relative flex justify-center items-center"
          >
            <MdShoppingCart
              size={24}
              className="text-textColor cursor-pointer"
            />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#023e8a] flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : User}
              referrerPolicy="no-referrer"
              alt="user_image"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2"
              >
                {user && user.email === "francopacheco.dev@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={() => setIsMenu(false)}
                    >
                      Nuevo Producto <MdAdd size={30} />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer"
                >
                  Cerrar Sesión <MdLogout size={30} />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* -------------------------------------- mobile ------------------------------------------------ */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          onClick={showCart}
          className="relative flex justify-center items-center"
        >
          <MdShoppingCart size={26} className="text-textColor cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#023e8a] flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            src={Logo}
            alt="logo"
            className="w-12 object-cover"
            whileTap={{ scale: 0.6 }}
          />
          <p className="text-[#023e8a] text-xl font-bold">FP Delivery</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : User}
            referrerPolicy="no-referrer"
            alt="user_image"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2"
            >
              {user && user.email === "francopacheco.dev@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="rounded-md px-4 py-2 justify-center bg-slate-200 flex items-center gap-3 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer"
                    onClick={() => setIsMenu(false)}
                  >
                    Nuevo Producto <MdAdd size={20} />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col">
                <li
                  className=" px-4 py-2 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer "
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li
                  className="px-4 py-2 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer "
                  onClick={() => setIsMenu(false)}
                >
                  Menú
                </li>
                <li
                  className="px-4 py-2 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer "
                  onClick={() => setIsMenu(false)}
                >
                  Sobre Nosotros
                </li>
                <li
                  className="px-4 py-2 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer "
                  onClick={() => setIsMenu(false)}
                >
                  Contacto
                </li>
              </ul>

              <p
                onClick={logout}
                className="rounded-md px-4 py-2 flex items-center justify-center bg-slate-200 gap-3 text-base text-textColor hover:text-[#023e8a] duration-100 transition-all ease-in-out cursor-pointer"
              >
                Cerrar Sesión <MdLogout size={20} />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

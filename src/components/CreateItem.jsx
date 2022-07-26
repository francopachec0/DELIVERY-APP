import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdFastfood, MdCloudUpload, MdDelete } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {};

  const deleteImage = () => {};

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-[#023e8a] rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-black"
                : "bg-emerald-400 text-black"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-[#023e8a] flex items-center gap-2">
          <MdFastfood className="text-2xl text-gray-700" />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            placeholder="Nombre del Producto"
            className="w-full h-full bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400"
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-2 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              Elegí una Categoría
            </option>
            {categories &&
              categories.map((c) => (
                <option
                  key={c.id}
                  value={c.urlParamName}
                  className="text-base border-0 outline-none bg-white text-headingColor"
                >
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!image ? (
                <>
                  <label className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-gray-500 hover:text-gray-700 duration-100 transition-all ease-in-out">
                        <MdCloudUpload size={38} />
                        <p>Click Aquí para subir una Imagen</p>
                      </div>
                      <input
                        type="file"
                        name="uploadImage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={image}
                      alt="uploaded img"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete size={24} className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateItem;

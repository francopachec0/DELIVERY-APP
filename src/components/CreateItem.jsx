import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-[#023e8a] rounded-lg p-4 flex flex-col items-center justify-center">
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
        <div className=""></div>
      </div>
    </div>
  );
};

export default CreateItem;

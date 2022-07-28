import Food1 from "../assets/comida1.png";
import Food2 from "../assets/comida2.png";
import Food3 from "../assets/comida3.png";
import Food4 from "../assets/comida4.png";
import {
  GiChickenOven,
  GiDoubleFish,
  GiBowlOfRice,
  GiFruitBowl,
  GiIceCreamCone,
} from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

export const FoodList = [
  {
    id: 1,
    name: "Big Mac Combo",
    price: 799,
    image: Food1,
  },
  {
    id: 2,
    name: "Lomito Especial",
    price: 899,
    image: Food2,
  },
  {
    id: 3,
    name: "Pizza Pepperoni",
    price: 749,
    image: Food3,
  },
  {
    id: 4,
    name: "Tacos Mixtos",
    price: 799,
    image: Food4,
  },
];

export const categories = [
  {
    id: 1,
    name: "Pollo",
    urlParamName: "pollo",
    icon: (
      <GiChickenOven
        size={24}
        className="text-white group-hover:text-[#023e8a]"
      />
    ),
  },
  {
    id: 2,
    name: "Arroz",
    urlParamName: "arroz",
    icon: (
      <GiBowlOfRice
        size={24}
        className="text-white group-hover:text-[#023e8a]"
      />
    ),
  },
  {
    id: 3,
    name: "Pescado",
    urlParamName: "pescado",
    icon: (
      <GiDoubleFish
        size={24}
        className="text-white group-hover:text-[#023e8a]"
      />
    ),
  },
  {
    id: 4,
    name: "Frutas",
    urlParamName: "frutas",
    icon: (
      <GiFruitBowl
        size={24}
        className="text-white group-hover:text-[#023e8a]"
      />
    ),
  },
  {
    id: 5,
    name: "Helados",
    urlParamName: "helados",
    icon: (
      <GiIceCreamCone
        size={24}
        className="text-white group-hover:text-[#023e8a]"
      />
    ),
  },

  {
    id: 6,
    name: "Bebidas",
    urlParamName: "bebidas",
    icon: (
      <BiDrink size={24} className="text-white group-hover:text-[#023e8a]" />
    ),
  },
];

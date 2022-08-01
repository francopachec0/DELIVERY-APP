import { getUser, getCart } from "../utils/LocalStorageData";

const userInfo = getUser();
const cartInfo = getCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};

console.log(initialState.cartItems);

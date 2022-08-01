export const getUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};

export const getCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

      //console.log(cartInfo)
  return cartInfo ? cartInfo : [];
};


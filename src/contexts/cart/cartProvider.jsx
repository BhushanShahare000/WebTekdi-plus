import React, { useEffect } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [cartItemMap, setCartItemMap] = React.useState({});

  // add to cart function
  const addToCart = (product) => {
    const isProductExist = cart.find((item) => item.id == product.id);
    if (isProductExist) return;
    setCart((prev) => [...prev, product]);
  };

  // remove the product from the cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  // computerPrice
  const computerPrice = () => {
    if (cart.length > 0) {
      return 0;
    }
    let price = 0;
    cart.forEach((product) => {
      const priceOfProduct = Number(product.price.slice(1));
      price += priceOfProduct;
    });

    return price;
  };

  React.useEffect(() => {
    const idToBoolean = {};
    cart.forEach((item) => {
      idToBoolean[item.id] = true;
    });
    setCartItemMap(idToBoolean);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        computerPrice,
        removeFromCart,
        cartItemMap,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

"use client"
import { createContext, FC, useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

type ContextValues = {
  handleAddToCart: (data: any, quantity: number) => void;
  cartItems: BasketItem[];
  handleDeleteFromCart: (productId: any) => void

  handleIncreaseQuantity: (productId:number) => void
  handleDecreaseQuantity: (productId:number) => void
};

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;

};

const AppContext = createContext<ContextValues | null>(null);

const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<BasketItem[]>([]);

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setQuantity(inputValue);
  };

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const cartDataJSON = localStorage.getItem("cartData");
    const cartData: BasketItem[] = cartDataJSON ? JSON.parse(cartDataJSON) : [];
    const cartDataArray = Object.values(cartData);

    setCartItems(cartDataArray)
    
  }, []);


  const handleAddToCart = (data: any, quantity: number) => {
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : {};
    const productId = data.data.id;

    if (quantity === 0) {
      return;
    }

    if (cartData[productId]) {
      cartData[productId].quantity += quantity;
    } else {
      cartData[productId] = {
        id: productId, 
        name: data.data.Name,
        price: data.data.Price,
        quantity: quantity,
      };
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));

    const updatedCartItems: BasketItem[] = Object.values(cartData);
    setCartItems(updatedCartItems);
  };

  const handleDeleteFromCart = (productId: string) => {
    // Remove the item with the given productId from the cart
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : {};

    if (cartData[productId]) {
      delete cartData[productId];
      localStorage.setItem("cartData", JSON.stringify(cartData));

      const updatedCartItems: BasketItem[] = Object.values(cartData);
      setCartItems(updatedCartItems);
    }
  };

  const handleIncreaseQuantity = (productId: number) =>{
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : {};

    if (cartData[productId]) {
      cartData[productId].quantity += 1;
      localStorage.setItem("cartData", JSON.stringify(cartData));

      const updatedCartItems: BasketItem[] = Object.values(cartData);
      setCartItems(updatedCartItems);
    }
  }

  const handleDecreaseQuantity = (productId: number) => {
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : {};

    if (cartData[productId] && cartData[productId].quantity > 1) {
      cartData[productId].quantity -= 1;
      localStorage.setItem("cartData", JSON.stringify(cartData));

      const updatedCartItems: BasketItem[] = Object.values(cartData);
      setCartItems(updatedCartItems);
    }
  };
  const contextValues: ContextValues = {
    handleAddToCart,
    cartItems,
    handleDeleteFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,

  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../helpers/useLocalStorage";
import "react-toastify/dist/ReactToastify.css";
import Notification, { notify } from "../components/Notification";

type ShoppingContextProviderProps = {
  children: ReactNode;
};
type ShoppingContext = {
  getItemQtt: (id: number) => number;
  increaseCartQtt: (id: number) => void;
  decreaseCartQtt: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  cartQty: number;
  cartItems: CartItem[];
  checkoutCart: () => void;
};
type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingContext = createContext({} as ShoppingContext);

export function useShoppingContext() {
  return useContext(ShoppingContext);
}

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const cartQty = cartItems.reduce((qty, item) => item.quantity + qty, 0);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  function getItemQtt(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQtt(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQtt(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function checkoutCart() {
    localStorage.setItem("shopping-cart", "");
    setCartItems([]);
    notify("Compra concluída com sucesso!");
  }

  return (
    <ShoppingContext.Provider
      value={{
        getItemQtt,
        increaseCartQtt,
        decreaseCartQtt,
        removeFromCart,
        cartItems,
        cartQty,
        openCart,
        checkoutCart,
      }}
    >
      {children}
      <Notification />
      <ShoppingCart isOpen={isOpen} />
    </ShoppingContext.Provider>
  );
}

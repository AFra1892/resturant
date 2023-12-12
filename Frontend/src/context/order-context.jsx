import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const OrderContext = createContext(null);

export const OrderContextProvider = (props)=>{

const [menu,setMenu] = useState([])
    useEffect(()=>{
        axios
            .get('http://localhost:5555/foods')
            .then((res)=>{
                setMenu(res.data.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[])

const getDefaultCart = ()=>{
    let cart = {};
    for (let i = 1; i< menu.length + 1 ; i++){
        cart[i] = 0;
    }
    return cart;
};

    const [cartItems , setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = menu.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
    
      const addToCart = (itemId) => {
        alert('clicked')
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };
    
      const checkout = () => {
        setCartItems(getDefaultCart());
      };
    
      const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
      };
      return (
        <OrderContext.Provider value={contextValue}>
          {props.children}
        </OrderContext.Provider>
      );
}
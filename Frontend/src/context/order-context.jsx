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

// const getDefaultCart = ()=>{
//     let cart = {};
//     for (let i = 1; i< menu.length + 1 ; i++){
//         cart[i] = 0;
//     }
//     return cart;
// };
let cart = {
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0,
  10:0,
  12:0,
  13:0,
  14:0,
  15:0,
  16:0,
  17:0,
}
    const [cartItems , setCartItems] = useState(cart);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = menu.find((product) => product.idd === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
    
      const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };
    
      const checkout = () => {
        setCartItems(cart);
      };
    
      const contextValue = {
        menu,
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
import {createContext,useState,useEffect} from 'react'
//loading items from db

export const ShContext = createContext(null)

export const ShopContext = (props) => {
    const [cartItems,setCartItems] = useState()
    
    const contextValue = {
        cartItems
    }
    return (
    <ShContext.Provider value={contextValue}>
        {props.children}
    </ShContext.Provider>
  )
}

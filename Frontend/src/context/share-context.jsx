import { createContext,useEffect,useState } from 'react'

export const ShareContext = createContext(null);

export const ShareContextProvider = (props) => {
    const[tokenn , setTokenn] = useState('')
    
    const contextValue = {
        tokenn,
      };
  return (
    <ShareContext.Provider value={contextValue}>
          {props.children}
        </ShareContext.Provider>
  )
}

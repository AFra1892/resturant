import { createContext,useEffect,useState } from 'react'

export const ShareContext = createContext(null);

export const ShareContextProvider = (props) => {
    const[tokenn , setTokenn] = useState('')
    const [isLoged,setIsLoged] = useState(false)

    const contextValue = {
        tokenn,
        isLoged,
        setIsLoged
      };
  return (
    <ShareContext.Provider value={contextValue}>
          {props.children}
        </ShareContext.Provider>
  )
}

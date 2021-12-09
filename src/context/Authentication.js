import { createContext,  useState } from "react";


const Authentication = createContext()


function Provider ({ children }){

    const [ token, setToken ] = useState(window.localStorage.getItem("token"));
  


    return (
        <Authentication.Provider value={{token, setToken}}>
            {children}
        </Authentication.Provider>
    )
}
export {
    Provider,
    Authentication
}
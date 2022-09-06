import { createContext, useReducer, useState } from "react";

export const MercyshipContext = createContext();

const MercyshipContextProvider = (props) => {
    
    return(

        <MercyshipContextProvider value={}>{props.children}
        </MercyshipContextProvider>     
    )
}

export default MercyshipContext;
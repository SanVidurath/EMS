// hook.tsx
import { useContext } from "react";
import { AppContext, AppContextProps } from "./context";

export const useGlobalContext = ():AppContextProps=>{
    const context = useContext(AppContext);

    if(!context){
        throw new Error("context must be used within an AppContext Provider")
    }
    return context;
}
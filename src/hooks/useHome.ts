import { useContext } from "react";
import { HomeContext } from "../context/home";


export const useHome = () => {
    const contextValue = useContext(HomeContext);

  if (contextValue === undefined) {
    throw new Error("useHome debe utilizarse dentro de un proveedor HomeContext");
  }

  return contextValue;
}
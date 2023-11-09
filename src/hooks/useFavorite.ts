import { useContext } from "react";
import { FavoriteContext } from "../context/favorite";

export const useFavorite = () => {
    const contextValue = useContext(FavoriteContext);
    
  if (contextValue === undefined) {
    throw new Error("useFavorite debe utilizarse dentro de un proveedor FavoriteContext");
  }
  
  return contextValue;
}
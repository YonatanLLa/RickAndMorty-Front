import { createContext, ReactNode } from "react";
import { useHomeReducer } from "../reducers/action";
interface MiContextType {
    //state is a array of
    addFavorite: (id: number) => void
}

export const FavoriteContext = createContext<MiContextType | undefined>(undefined);

interface MiProviderProps {
    children: ReactNode;
}

  
export const FavoriteProvider: React.FC<MiProviderProps> = ({ children }: MiProviderProps) => {

    const { addFavorite } = useHomeReducer();

    return (
        <FavoriteContext.Provider value={{
            addFavorite
    }}>
            {children}
        </FavoriteContext.Provider>
    );
};

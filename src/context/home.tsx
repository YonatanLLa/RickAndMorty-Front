import { createContext, ReactNode } from "react";
import { useHomeReducer } from "../reducers/action";
import { CharacterInitialState } from "../interface/characters";
interface MiContextType {
    //state is a array of
    state: CharacterInitialState
    getAllCharacters: ()=>void
}

export const HomeContext = createContext<MiContextType | undefined>(undefined);

interface MiProviderProps {
    children: ReactNode;
}

  
export const HomeProvider: React.FC<MiProviderProps> = ({ children }: MiProviderProps) => {

    const { state, getAllCharacters } = useHomeReducer();

    return (
        <HomeContext.Provider value={{
            state,
            getAllCharacters
        }}>
            {children}
        </HomeContext.Provider>
    );
};

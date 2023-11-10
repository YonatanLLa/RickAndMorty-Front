import { createContext, ReactNode } from "react";
import { useHomeReducer } from "../reducers/action";
import { CharacterInitialState, Characters } from "../interface/characters";
interface MiContextType {
  //state is a array of
  state: CharacterInitialState;
  getAllCharacters: () => void;
  addFavorite: (character: Characters) => void;
  removeFavorite: (character: Characters) => void;
  searchCharacter: (searchBar: string) => void;
  
}

export const HomeContext = createContext<MiContextType | undefined>(undefined);

interface MiProviderProps {
  children: ReactNode;
}

export const HomeProvider: React.FC<MiProviderProps> = ({
  children,
}: MiProviderProps) => {
  const { state, getAllCharacters, addFavorite, removeFavorite, searchCharacter } =
    useHomeReducer();

  return (
    <HomeContext.Provider
      value={{
        state,
        getAllCharacters,
        addFavorite,
        removeFavorite,
        searchCharacter
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export interface Characters {
  addFavorite: (id: number) => void;
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
}

export interface CharactersFavorites {
  key: number;
  character: Characters[];
  removeFavorite: () => void;

}

export interface FavProps {
  character: Characters;
  removeFavorite: () => void;
}
export interface CardFavProps extends FavProps {
  character: Characters;
  removeFavorite: () => void;
  addFavorite: () => void; 
  isFavorite:() => boolean;
}


export interface CharacterInitialState {
  characters: Characters[];
  favorite: Characters[];
}

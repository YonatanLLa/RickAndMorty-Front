import { HOME_ACTION_TYPES } from "./tipes";
import { CharacterInitialState } from "../interface/characters";

const { GET_ALL_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE,SEARCH_CHARACTER,FILTER_CHARACTERS  } = HOME_ACTION_TYPES;

export const homeIinialState: CharacterInitialState = {
  characters: [],
  favorite: [],
  searchBar: [],
};

const UPDATE_STATE_BY_ACTION = {
  [GET_ALL_CHARACTERS]: (state: CharacterInitialState, action: any) => {
    return {
      ...state,
      characters: action.payload.map((item: any) => ({
        id: item.id,
        name: item.name.split(" ").slice(0, 2).join(" "),
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      })),
      searchBar:  action.payload.map((item: any) => ({
        id: item.id,
        name: item.name.split(" ").slice(0, 2).join(" "),
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image,
      })),
};
  },
  [ADD_FAVORITE]: (state: CharacterInitialState, action: any) => {
    const { id } = action.payload;
    const characterToAdd = state.characters.find((item) => item.id === id);

    if (characterToAdd) {
      return {
        ...state,
        favorite: [...state.favorite, characterToAdd],
      };
    }

    return state;
  },
  [REMOVE_FAVORITE]: (state: CharacterInitialState, action: any) => {
    const { id } = action.payload;
    // filter
    const favorite = state.favorite.filter((item) => item.id !== id);
    return {
      ...state,
      favorite,
    };
  },
  [SEARCH_CHARACTER]: (state: CharacterInitialState, action: any) => {    
    const searchTerm = action.payload.toLowerCase();
    return {
      ...state,
      characters: state.searchBar.filter((item) => {
          const itemName = item.name.toLowerCase();
          return itemName.includes(searchTerm);
      }),
  };
  },

  [FILTER_CHARACTERS]: (state: CharacterInitialState, action: any) => {
    // const searchTerm = action.payload;
    const {species, gender, status} = action.payload;

    return {
      ...state,
      characters: state.searchBar.filter((item) => {
        if (species !== 'all' && item.species !== species) {          
          return false;
        }
        if (gender !== 'all' && item.gender !== gender) {
          return false;
        }
        if (status !== 'all' && item.status !== status) {
          return false;
        }
        return true;
      }),
    }
  },

};

export const homeReducer = (state: CharacterInitialState, action: any) => {
  const handler = UPDATE_STATE_BY_ACTION[action.type];
  return handler ? handler(state, action) : state;
};

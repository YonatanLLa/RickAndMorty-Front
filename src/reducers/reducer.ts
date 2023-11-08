import { COUNT_ACTION_TYPES } from "./tipes";
import { CharacterInitialState } from "../interface/characters"
const { GET_ALL_CHARACTERS } = COUNT_ACTION_TYPES;



export const countIinialState: CharacterInitialState = {
  // is a array of characters in the object
  characters: [] 
};

const UPDATE_STATE_BY_ACTION = {
  [GET_ALL_CHARACTERS]: (state: CharacterInitialState, action: any) => {

    return {
    ...state,
      characters: action.payload.map((item: any )=> ({
        id: item.id,
        name: item.name.split(" ").slice(0, 2).join(" "),
        status: item.status,
        species: item.species,
        gender: item.gender,
        origin: item.origin.name,
        image: item.image
      }))
      
    };
    

    
  }
}


export const countReducer = (state: CharacterInitialState, action: any) => {
  const handler = UPDATE_STATE_BY_ACTION[action.type];
  return handler? handler(state, action) : state;

}
import { useReducer } from "react";
import { COUNT_ACTION_TYPES } from "./tipes";
import { countReducer, countIinialState } from "./reducer";
import axios from "axios";

const { GET_ALL_CHARACTERS } = COUNT_ACTION_TYPES;
const api = "https://rickandmortyapi.com/api/character"

export const useHomeReducer = () => {
    const [state, dispatch] = useReducer( countReducer, countIinialState ); 
    console.log(state);
    
    const getAllCharacters = async () => {
        try {
            const response = await axios.get(api);
            console.log(response.data.results);
            
            dispatch({
                type: GET_ALL_CHARACTERS,
                payload: response.data.results
            })
        } catch (error) {
            console.log(error);
                        
        }
        
    }
    

    return {
        state,
        getAllCharacters
    }

}
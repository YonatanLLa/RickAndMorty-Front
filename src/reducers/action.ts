import { useReducer } from "react";
import { HOME_ACTION_TYPES } from "./tipes";
import { homeReducer, homeIinialState } from "./reducer";
import axios from "axios";
import { Characters } from "../interface/characters";

const {
  GET_ALL_CHARACTERS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SEARCH_CHARACTER,
  FILTER_CHARACTERS,
} = HOME_ACTION_TYPES;

const api = "https://rickandmortyapi.com/api/character";

export const useHomeReducer = () => {
  const [state, dispatch] = useReducer(homeReducer, homeIinialState);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(api);

      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (character: Characters) => {
    try {
      dispatch({
        type: ADD_FAVORITE,
        payload: character,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = (character: Characters) => {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: character,
    });
  };

  const searchCharacter = (searchBar: string) => {
    dispatch({
      type: SEARCH_CHARACTER,
      payload: searchBar,
    });
  };

  const filterCharacters = (filters: any) => {
    console.log(filters, "filters");
    dispatch({
      type: FILTER_CHARACTERS,
      payload: filters,
    });

  };

  return {
    state,
    getAllCharacters,
    addFavorite,
    removeFavorite,
    searchCharacter,
    filterCharacters,
  };
};

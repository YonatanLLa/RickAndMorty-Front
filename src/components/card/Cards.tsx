import "./Cards.css";
import React from "react";
import { Characters } from "../../interface/characters";
import { Card } from "./Card";

import { useHome } from "../../hooks/useHome";

export const Cards: React.FC = () => {
  const { state, addFavorite, removeFavorite } = useHome();

  const checkFavorite = (character: Characters) => {
    return state.favorite.some((item) => item.id === character.id);
  };

  
  return (
    <article className="card-continaer">
      {state.characters.length > 0 ? (
        state.characters.slice(0,10).map((character: Characters, index: number) => {
          return (
            <Card
              key={index}
              character={character}
              addFavorite={() => addFavorite(character)}
              isFavorite={() => checkFavorite(character)}
              removeFavorite={() => removeFavorite(character)}
            />
          );
        })
      ) : (
        <p>No se ha cargado aun ningun personahe</p>
      )}
    </article>
  );
};

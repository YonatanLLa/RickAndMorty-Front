import React from "react";
import styles from "./Favorite.module.css"
import { Characters } from "../../interface/characters.ts";

import { useHome } from "../../hooks/useHome.ts";
import { CardFavorite } from "./cardFavorite.tsx";
import { NotFavorite } from "./NotFavorite.tsx";

export const Favorite: React.FC = () => {
  const { state, removeFavorite } = useHome();


  return (
    <article className={styles.cardContainer}>
      {state.favorite.length > 0 ? (
        state.favorite.map((fav: Characters, index: number) => {
          return (
            <CardFavorite
              key={index}
              character={fav}
              removeFavorite={() => removeFavorite(fav)}
            />
          );
        })
      ) : (
        <NotFavorite/>
      )}
    </article>
  );
};

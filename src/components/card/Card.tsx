import React, { useState } from "react";
import { CardFavProps } from "../../interface/characters";
import "./Card.css";
import { LoadingImg } from "./LoadingImg";

export const Card: React.FC<CardFavProps> = ({
  character,
  addFavorite,
  isFavorite,
  removeFavorite,
}: CardFavProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorite()) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  // loading image
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>{character.name}</h2>
        <button
          onClick={handleFavoriteClick}
          className={`${isFavorite() ? "favorite" : "notFavorite"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
          </svg>
        </button>
      </div>
      <img
        src={character.image}
        alt={character.name}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
      {isLoading && <LoadingImg />}

      <div className="card-footer">
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  );
};

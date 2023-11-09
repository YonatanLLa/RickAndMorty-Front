import React from "react"
import { FavProps } from "../../interface/characters"
import  { useHome } from "../../hooks/useHome"

export const CardFavorite: React.FC<FavProps> = ({
    character,
    removeFavorite,
  }) => {
    const { state } = useHome();

    const isFavorite = () => {
      return state.favorite.some((item) => item.id === character.id);
    }

  return (
    <div className="card">
      <div className="card-title">
        <h2>{character.name}</h2>
        <button onClick={removeFavorite} className={`${ isFavorite() ? "favorite": "notFavorite"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>
        </button>

      </div>
      <img src={character.image} alt={character.name} />
      <div className="card-footer">
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  )
}

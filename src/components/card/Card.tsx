import { Characters } from "../../interface/characters";
import "./Card.css";

export const Card = (character: Characters) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{character.name}</h2>
        <button>favorito</button>
      </div>
      <img src={character.image} alt={character.name} />
      <div className="card-footer">
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    </div>
  );
};

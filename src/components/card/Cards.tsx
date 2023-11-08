import "./Cards.css"
import React from "react"
import { useHome } from "../../hooks/useHome"
import { Characters } from "../../interface/characters"
import { Card } from "./Card";
export const Cards: React.FC = () => {
    const { state } = useHome();
  return (
    <article className="card-continaer">
        {
            state.characters.length > 0 ? (
            state.characters.map((character: Characters, index: number) => (
                <Card 
                    key={index}
                   {...character}
                />
            ))): <p>No se ha cargado aun ningun personahe</p>
        }
    </article>
  )
}

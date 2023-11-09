import "./Detail.css"
import React from 'react'
import { useParams } from 'react-router'
import { useHome } from '../../hooks/useHome.ts'

export const Detail: React.FC = () => {
    const { id } = useParams()
    const { state } = useHome()

    const character = state.characters.find(character => character.id === Number(id))

    // /home
    const handleClick = () => {
      window.history.back()
    }
    

  return (
    <div className="container">
      <div className="continer-card">
        <div>
          <h1>{character?.name}</h1>
          <img className="imgDetail" src={character?.image} alt={character?.name} />         
        </div>
        <ul className="container-list">
          <li>{character?.species}</li>
          <li>{character?.gender}</li>
          <li>{character?.status}</li>
          <li>{character?.origin.name}</li>
        <button onClick={handleClick} className="buttonDetail">Regresar</button>
        </ul>
      </div>
    </div>
  )
}

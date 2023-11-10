import "./Filter.css"
import React from 'react'
import { SearchBar } from '../searchBar/SearchBar'

export const Filter: React.FC = () => {
  return (
    <div className='filterContainer'>
      <div>
        <SearchBar/>
      </div>
      <div>
        <h1>Filter</h1>      

      </div>
    </div>
  )
}

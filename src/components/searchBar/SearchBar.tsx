import React from 'react';
import './SearchBar.css'; // Importa el archivo de estilos
import { useHome } from '../../hooks/useHome';

export const SearchBar: React.FC = () => {
    const { searchCharacter } = useHome();
    const [searchBar, setSearchBar] = React.useState('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setSearchBar(inputValue);
        searchCharacter(inputValue);


    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchCharacter(searchBar);
        setSearchBar('');
        
    }

    

    return (
        <form 
            onSubmit={handleSubmit}
            className="search-bar-container">
            <input 
                type="text" 
                id="characterSearch"
                placeholder="Search" 
                className="search-input"
                value={searchBar}
                onChange={handleInputChange} />
            <button className="search-button" type='submit'>Search</button>
        </form>
    );
};
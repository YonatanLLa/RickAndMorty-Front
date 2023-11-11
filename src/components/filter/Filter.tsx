import React, { ChangeEvent, useEffect } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { useHome } from "../../hooks/useHome";
import "./Filter.css";

interface Filters {
  species: string;
  gender: string;
  status: string;
  [key: string]: string; 
}

export const Filter: React.FC = () => {
  const [filters, setFilters] = React.useState<Filters>({
    species: "all",
    gender: "all",
    status: "all",
  });
  
  const { filterCharacters } = useHome();
  
  const handleFilterChange = (
    filterType: "species" | "gender" | "status",
    value: string
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));

  };
  useEffect(() => {
    filterCharacters(filters);
  }, [filters]);

  return (
    <div className="filterContainer">
      <div>
        <SearchBar />
      </div>
      <section className="filterChildren">
        {["species", "gender", "status"].map((filterType) => (
          <div key={filterType} className="filterItem">
            <h4>
              {filterType === "species"
                ? "Especies: "
                : filterType === "gender"
                ? "Género: "
                : "Estado: "}
            </h4>
            <select
              value={filters[filterType]}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleFilterChange(
                  filterType as "species" | "gender" | "status",
                  e.target.value
                )
              }
            >
              <option value="all">Todos</option>
              {filterType === "species" ? (
                <>
                  <option value="Human">Human</option>
                  <option value="Alien">Alien</option>
                </>
              ) : filterType === "gender" ? (
                <>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </>
              ) : (
                <>
                  <option value="Alive">Vivo</option>
                  <option value="Dead">Muerto</option>
                </>
              )}
            </select>
          </div>
        ))}
      </section>
    </div>
  );
};



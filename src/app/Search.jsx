import React, { useState, useEffect } from "react";
import Breed from "./Breed";
import Cat from "./Cat";

const Search = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filteredBreeds = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredBreeds);
    props.onSearch(value);
  };

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        list="breeds"
      />
      <datalist id="breeds">
        {suggestions.map((breed) => (
          <Breed key={breed.id} id={breed.id} name={breed.name} />
        ))}
      </datalist>
    </>
  );
};

export default Search;

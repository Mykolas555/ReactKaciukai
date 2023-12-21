// App.jsx
import React, { useEffect, useState } from "react";
import Search from "./Search";
import Cat from "./Cat";
import Breed from "./Breed";

function App() {
  const [search, setSearch] = useState(false);
  const [cats, setCats] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search) {
      try {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
          .then((response) => response.json())
          .then((data) => setCats(data))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
  }, [search]);

  useEffect(() => {
    try {
      fetch("https://api.thecatapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => setBreeds(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Search onSearch={handleSearch} />
      {cats.map((cat) => (
        <Cat key={cat.id} url={cat.url} />
      ))}
      {/* Display all cat breeds */}
    </>
  );
}

export default App;

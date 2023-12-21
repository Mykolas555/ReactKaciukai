import { useEffect } from "react";
import { useState } from "react";
import Search from "./Search";
import Cat from "./Cat";
import Breed from "./Breed";

function App() {
  //kaciu isedimas visu 
  
  const [breeds, setBreeds] = useState([])

  useEffect(()=>{
   try{
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(response=>response.json()
    .then(data=>setBreeds(data))
    )
   }catch(msg){
    console.log(msg)
   }
  },[])

  

  return (
    <>
    {/*kaciu paveiksliukai su autocomplete*/}
    <Search />

    {/*kaciu isvedimas visu*/}
      <h1>kaciu veisles</h1>
      {breeds?.map((breed)=> //klaustukas uzklausia ar turim duomenu
        <Cat name={breed.name}/>)}
      <Breed/>
    </>
  );
}

export default App;

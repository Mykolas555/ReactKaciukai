import { useState } from "react";
import { useEffect } from "react";

const Search = ()=>{

 //kaciu paveiksliuku isvedimas

  useState [breeds, setBreeds] = useState('')


  useEffect(()=>{
      if(search){
        try{
          fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
          .then(response=>response.json())
          .then(data=>setCats(data))
        }catch(msg){
          console.log(msg)
        }
      }
    },[search])

    console.log(search)

    return(
        <>
            <input type="text"/>
            
        </>
    )
}

export default Search
import { useEffect } from "react";
import { useState } from "react";

const Search = ()=>{

    //kaciu paveiksliuku isvedimas

  useState [search, setSearch] = useState([])

  const handleSearch = (data)=>{
      setSearch(data)
  }

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
            <input type="text" onSearch={handleSearch}/>
            <datalist>
            {search?.map((search)=><value>{search.name}</value>)}
            </datalist>
        </>
    )
}

export default Search
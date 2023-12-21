
const Breed = ()=>{

    return(
        <>
            <datalist>
            {breeds?.map((breed)=><value>{breed.name}</value> )}
            </datalist>
        </>
    )
}

export default Breed
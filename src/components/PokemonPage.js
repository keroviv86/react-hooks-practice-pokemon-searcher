import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon]= useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(res=>res.json())
    .then(data=>setPokemon(data))
  }, [])

  function handleSearch(value){
    setSearch(value)
  }

  function filterSearch(){
    const filterArray = pokemon.filter((poke)=> (
      poke.name.toLowerCase().includes(search.toLowerCase())
    ))
    return filterArray
  }

  function handleSubmit(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit= {handleSubmit}/>
      <br />
      <Search handleSearch= {handleSearch}/>
      <br />
      <PokemonCollection pokemonData={filterSearch()}/>
    </Container>
  );
}

export default PokemonPage;

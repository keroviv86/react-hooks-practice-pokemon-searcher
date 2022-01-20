import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {
  const itemsToDisplay = pokemonData.map((pokemon)=> (
    <PokemonCard 
    key={pokemon.id}
    id = {pokemon.id}
    name = {pokemon.name}
    hp={pokemon.hp}
    front={pokemon.sprites.front}
    back={pokemon.sprites.back}

    />
  ))
  return (
    <Card.Group itemsPerRow={6}>
      {itemsToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;

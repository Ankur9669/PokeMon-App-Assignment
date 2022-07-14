import React from "react";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import { useAppSelector } from "../../app/hooks";
import Navbar from "../../components/navbar/Navbar";

const SavedPokemons = () => {
  const { savedPokemons } = useAppSelector((state) => state.pokemon);
  return (
    <div className="pokemon-listing-page">
      <Navbar />
      {savedPokemons.length > 0 ? (
        <>
          <h1>Saved Pokemons</h1>
          <div className="pokemon-listing-container">
            {savedPokemons.map((pokemon, index) => (
              <PokemonCard
                pokemonDetails={pokemon}
                key={pokemon.id}
                index={index}
              />
            ))}
          </div>
        </>
      ) : (
        <h1>Please add pokemons to the list by clicking on heart icon</h1>
      )}
    </div>
  );
};

export default SavedPokemons;

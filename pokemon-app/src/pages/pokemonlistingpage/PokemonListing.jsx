import React, { useEffect } from "react";
import "./pokemonlisting.css";
import { getPokemons } from "../../features/pokemons/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCard from "../../components/pokemoncard/PokemonCard";

const PokemonListing = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="pokemon-listing-page">
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemonDetails={pokemon} key={pokemon.id} index={index} />
      ))}
    </div>
  );
};

export default PokemonListing;

import React, { useEffect, useState } from "react";
import "./pokemonlisting.css";
import { getPokemons } from "../../features/pokemons/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import Navbar from "../../components/navbar/Navbar";

const PokemonListing = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);
  const { user } = useAppSelector((state) => state.auth);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getPokemons(1));
  }, []);

  return (
    <div className="pokemon-listing-page">
      <Navbar />
      <div className="pokemon-listing-container">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            pokemonDetails={pokemon}
            key={pokemon.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonListing;

import React, { useEffect, useState } from "react";
import "./pokemonlisting.css";
import { getPokemons } from "../../features/pokemons/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { pokemonActions } from "../../features/pokemons/pokemonSlice";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/buttons/Button";

const PokemonListing = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);
  const [currentClickCount, setCurrentClickCount] = useState(1);

  useEffect(() => {
    // To load pokemons
    dispatch(getPokemons(currentClickCount));
  }, [currentClickCount]);

  useEffect(() => {
    // To remove all the pokemons in the redux store when component unmounts
    return () => {
      dispatch(pokemonActions.setPokemons({ pokemons: [] }));
    };
  }, []);

  const handleOnClickLoadMore = () => {
    setCurrentClickCount((currentClickCount) => currentClickCount + 1);
  };
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
      <div className="load-more-button-container">
        <Button buttonText="Load More..." onClick={handleOnClickLoadMore} />
      </div>
    </div>
  );
};

export default PokemonListing;

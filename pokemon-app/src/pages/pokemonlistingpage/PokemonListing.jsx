import React, { useEffect, useState } from "react";
import {
  getPokemons,
  useAppDispatch,
  useAppSelector,
  pokemonActions,
  PokemonCard,
  Navbar,
  Button,
} from "./index";
import "./pokemonlisting.css";

const PokemonListing = () => {
  const dispatch = useAppDispatch();
  const { pokemons, loading } = useAppSelector((state) => state.pokemon);
  const [currentClickCount, setCurrentClickCount] = useState(1);
  const [morePokemonsLoading, setMorePokemonsLoading] = useState(false);

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

  useEffect(() => {
    // When pokemons would be loaded the button loading state will change
    setMorePokemonsLoading(loading);
  }, [loading]);

  const handleOnClickLoadMore = () => {
    // Load More Pokemons
    if (!morePokemonsLoading) {
      setCurrentClickCount((currentClickCount) => currentClickCount + 1);
    }
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
        <Button
          buttonText="Load More..."
          onClick={handleOnClickLoadMore}
          isLoading={morePokemonsLoading}
        />
      </div>
    </div>
  );
};

export default PokemonListing;

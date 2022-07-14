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
  const { pokemons, loading, currentClickCount } = useAppSelector(
    (state) => state.pokemon
  );
  const [morePokemonsLoading, setMorePokemonsLoading] = useState(false);

  useEffect(() => {
    // Initial Loading of pokemons
    if (pokemons.length === 0) {
      dispatch(getPokemons(currentClickCount));
    }
  }, []);

  useEffect(() => {
    // When pokemons would be loaded the button loading state will change
    setMorePokemonsLoading(loading);
  }, [loading]);

  const handleOnClickLoadMore = () => {
    // Load More Pokemons
    if (!morePokemonsLoading) {
      dispatch(getPokemons(currentClickCount + 1));
      dispatch(pokemonActions.increaseClickCount());
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

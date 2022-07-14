export const findIfPokemonExists = (pokemons, pokemonToCheck) => {
  const foundPokemon = pokemons.find(
    (pokemon) => pokemon.id === pokemonToCheck.id
  );
  if (foundPokemon === undefined) {
    return false;
  } else {
    return true;
  }
};

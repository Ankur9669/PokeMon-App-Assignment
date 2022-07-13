export const getFilteredPokemons = (pokemons, searchValue) => {
  return pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      pokemon.type.toLowerCase().includes(searchValue)
  );
};

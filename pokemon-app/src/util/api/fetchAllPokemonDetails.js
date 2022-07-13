import { fetchApi } from "./fetchApi";
import { extractPokemonDetails } from "../extractPokemonDetails";

export const fetchAllPokemonDetails = async (pokemons) => {
  // Making array of all promises
  let allPokemonPromises = pokemons.map((pokemon) => {
    return fetchApi(pokemon.url);
  });

  allPokemonPromises = await Promise.allSettled(allPokemonPromises);

  // After All promises are resolved
  let allPokemonDetails = allPokemonPromises.map((pokemonPromise, index) => {
    return {
      name: pokemons[index].name,
      data: pokemonPromise.value.data,
    };
  });

  //   console.log(allPokemonDetails);
  let extractedPokemonDetails = extractPokemonDetails(allPokemonDetails);
  return extractedPokemonDetails;
};

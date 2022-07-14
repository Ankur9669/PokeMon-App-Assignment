import { fetchApi } from "./fetchApi";

export const fetchAllPokemon = async (clickNumber) => {
  const GET_ALL_POKEMON = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${clickNumber}`;
  const { data, success, message } = await fetchApi(GET_ALL_POKEMON);
  if (success) {
    return [...data.results];
  } else {
    // Show Error
    return message;
  }
};

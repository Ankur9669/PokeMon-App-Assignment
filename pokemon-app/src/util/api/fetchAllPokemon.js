import { fetchApi } from "./fetchApi";

export const fetchAllPokemon = async () => {
  const GET_ALL_POKEMON = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  const { data, success, message } = await fetchApi(GET_ALL_POKEMON);
  if (success) {
    return [...data.results];
  } else {
    // Show Error
    return message;
  }
};

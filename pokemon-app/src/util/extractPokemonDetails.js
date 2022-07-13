import uuid from "react-uuid";

const statsReducer = (reducedStats, currentStat) => {
  let key = currentStat.stat.name;
  let value = currentStat.base_stat;

  return [...reducedStats, { key: key, value: value }];
};
export const extractPokemonDetails = (pokemonDetails) => {
  let extractedPokemonDetails = [];
  let extractedPokemon = pokemonDetails.map((pokemonDetail) => {
    let id = uuid();
    let name = pokemonDetail.name;
    let type = pokemonDetail.data.types[0].type.name;
    let imageUrl = pokemonDetail.data.sprites.other.dream_world.front_default;
    let stats = pokemonDetail.data.stats;
    stats = stats.reduce(statsReducer, []);
    return {
      id: id,
      name: name,
      type: type,
      imageUrl: imageUrl,
      stats: stats,
    };
  });
  extractedPokemonDetails.push(...extractedPokemon);

  return extractedPokemonDetails;
};

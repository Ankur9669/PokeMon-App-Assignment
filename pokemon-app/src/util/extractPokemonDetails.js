import uuid from "react-uuid";

const statsReducer = (reducedStats, currentStat) => {
  let key = currentStat.stat.name;
  let value = currentStat.base_stat;

  return [
    ...reducedStats,
    {
      [key]: value,
    },
  ];
};
export const extractPokemonDetails = (pokemonDetails) => {
  let extractedPokemonDetails = [];

  let extractedPokemon = pokemonDetails.map((pokemonDetail) => {
    let id = uuid();
    let type = pokemonDetail.data.types[0].type.name;
    let imageUrl = pokemonDetail.data.sprites.other.dream_world.front_default;
    let stats = pokemonDetail.data.stats;
    stats = stats.reduce(statsReducer, []);
    return {
      id: id,
      type: type,
      imageUrl: imageUrl,
      stats: stats,
    };
  });
  extractedPokemonDetails.push(extractedPokemon);
  //   console.log(extractedPokemonDetails);
  return extractedPokemonDetails;
};

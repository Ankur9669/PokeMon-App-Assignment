export const findBackGroundColorByPokemonType = (pokemonType) => {
  switch (pokemonType) {
    case "grass":
      return "pokemon-grass";

    case "fire":
      return "pokemon-fire";

    case "water":
      return "pokemon-water";

    case "normal":
      return "pokemon-normal";

    case "electric":
      return "pokemon-electric";

    case "ice":
      return "pokemon-ice";

    case "fighting":
      return "pokemon-fighting";

    case "poison":
      return "pokemon-poison";

    case "ground":
      return "pokemon-ground";

    case "flying":
      return "pokemon-flying";

    case "psychic":
      return "pokemon-psychic";

    case "bug":
      return "pokemon-bug";

    case "rock":
      return "pokemon-rock";

    case "ghost":
      return "pokemon-ghost";

    case "dark":
      return "pokemon-dark";

    case "dragon":
      return "pokemon-dragon";

    case "steel":
      return "pokemon-steel";

    case "fairy":
      return "pokemon-fairy";

    default:
      return "pokemon-water";
  }
};

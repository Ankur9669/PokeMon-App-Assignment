import React from "react";
import "./pokemon-card.css";
import uuid from "react-uuid";

const PokemonCard = (props) => {
  const { pokemonDetails, index } = props;
  const { imageUrl, type, stats, name } = pokemonDetails;

  const findBackGroundColorByPokemonType = (pokemonType) => {
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
  return (
    <div
      className={`pokemon-card-container ${findBackGroundColorByPokemonType(
        type
      )}`}
    >
      <div className="pokemon-image-container">
        <img
          src={imageUrl}
          loading="lazy"
          alt="pokemon-img"
          className="pokemon-image"
        />
      </div>
      <p className="pokemon-number pokemon-text-container">#{index + 1}</p>
      <p className="pokemon-text-container">{name}</p>
      <p className="pokemon-text-container">{type}</p>

      <div className="pokemon-content-overlay">
        {stats.map((statsItem) => (
          <div className="pokemon-stats-item" key={uuid()}>
            <p className="pokemon-stats-title pokemon-stats-text">
              {statsItem.key}
            </p>
            <progress
              value={statsItem.value}
              max="100"
              className="pokemon-stats-slider"
            ></progress>
            <p className="pokemon-stats-value pokemon-stats-text">
              {statsItem.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;

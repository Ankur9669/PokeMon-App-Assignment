import React from "react";
import "./pokemon-card.css";
import uuid from "react-uuid";

const PokemonCard = (props) => {
  const { pokemonDetails, index } = props;
  const { imageUrl, type, stats, name } = pokemonDetails;

  const findBackGroundColorByPokemonType = (pokemonType) => {
    switch (pokemonType) {
      case "grass":
        return "green";

      case "fire":
        return "orange";

      case "water":
        return "blue";

      default:
        return "blue";
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

import React from "react";
import "./pokemon-card.css";

const PokemonCard = (props) => {
  const { pokemonDetails } = props;
  console.log(pokemonDetails);
  return <div className="pokemon-card-container"></div>;
};

export default PokemonCard;

import React from "react";
import "./pokemon-card.css";
import {
  uuid,
  BsFillHeartFill,
  findBackGroundColorByPokemonType,
  findIfPokemonExists,
  useAppDispatch,
  useAppSelector,
  pokemonActions,
  showToast,
} from "./index";

const PokemonCard = (props) => {
  const { pokemonDetails, index } = props;
  const { imageUrl, type, stats, name } = pokemonDetails;
  const { savedPokemons } = useAppSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();

  const isPokemonInSavedList = findIfPokemonExists(
    savedPokemons,
    pokemonDetails
  );

  const handleOnClickLikeIcon = () => {
    if (isPokemonInSavedList) {
      //Remove from list
      let newSavedPokemons = savedPokemons.filter(
        (pokemon) => pokemon.id !== pokemonDetails.id
      );
      dispatch(pokemonActions.setSavedPokemons({ pokemons: newSavedPokemons }));
      showToast("SUCCESS", "Item removed from saved");
    } else {
      // Save in List
      let newSavedPokemons = [...savedPokemons, pokemonDetails];
      dispatch(pokemonActions.setSavedPokemons({ pokemons: newSavedPokemons }));
      showToast("SUCCESS", "Item saved");
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
        <BsFillHeartFill
          className={`like-icon ${
            isPokemonInSavedList ? "liked-pokemon" : "unliked-pokemon"
          }`}
          onClick={handleOnClickLikeIcon}
        />
        {stats.map((statsItem) => (
          <div className="pokemon-stats-item" key={uuid()}>
            <p className="pokemon-stats-title pokemon-stats-text">
              {statsItem.key}
            </p>
            <label htmlFor={`${statsItem.value}`}></label>
            <progress
              id={statsItem.value}
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

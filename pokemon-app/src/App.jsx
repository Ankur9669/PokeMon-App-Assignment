import React, { useEffect } from "react";
import "./App.css";
import { fetchApi } from "./util/api/fetchApi";
import uuid from "react-uuid";

function App() {
  const getAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=2&offset=0";
  // const getPokemonByName = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  let allPokemons;
  let allPokemonDetails;
  useEffect(() => {
    (async () => {
      await fetchAllPokemon();
      await fetchAllPokemonDetails(allPokemons);
    })();
  }, []);

  const fetchAllPokemon = async () => {
    const { data, success, message } = await fetchApi(getAllPokemon);
    if (success) {
      allPokemons = [...data.results];
    } else {
      // Show Error
      console.log(message);
    }
  };
  const fetchAllPokemonDetails = async (pokemons) => {
    // Making array of all promises
    let allPokemonPromises = pokemons.map((pokemon) => {
      return fetchApi(pokemon.url);
    });

    allPokemonPromises = await Promise.allSettled(allPokemonPromises);

    // After All promises are resolved
    allPokemonDetails = allPokemonPromises.map((pokemonPromise, index) => {
      return {
        name: pokemons[index].name,
        data: pokemonPromise.value.data,
      };
    });

    console.log(allPokemonDetails);
    extractPokemonDetails(allPokemonDetails);
  };

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
  const extractPokemonDetails = (pokemonDetails) => {
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
    console.log(extractedPokemonDetails);
  };
  return <div className="App">Ankur</div>;
}

export default App;

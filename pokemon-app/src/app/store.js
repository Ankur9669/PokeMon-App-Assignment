import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../features/pokemons/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});

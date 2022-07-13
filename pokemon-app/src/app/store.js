import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemons/pokemonSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    auth: authReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllPokemon } from "../../util/api/fetchAllPokemon";
import { fetchAllPokemonDetails } from "../../util/api/fetchAllPokemonDetails";

const initialState = {
  pokemons: [],
  error: "",
  loading: false,
};

const getPokemons = createAsyncThunk("pokemon/getPokemons", async () => {
  try {
    let allPokemons = await fetchAllPokemon();
    let allPokemonDetails = await fetchAllPokemonDetails(allPokemons);
    return allPokemonDetails;
  } catch (e) {
    return e;
  }
});
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.pokemons = [...action.payload];
      state.loading = false;
    });

    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPokemons.rejected, (state) => {
      state.pokemons = [];
      state.loading = false;
      state.error = "Error";
    });
  },
});

export { getPokemons };
export default pokemonSlice.reducer;
export const pokemonActions = pokemonSlice.actions;

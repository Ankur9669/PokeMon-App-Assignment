import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllPokemon } from "../../util/api/fetchAllPokemon";
import { fetchAllPokemonDetails } from "../../util/api/fetchAllPokemonDetails";

const initialState = {
  pokemons: [],
  error: "",
  loading: false,
};

const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (pageNumber) => {
    try {
      let allPokemons = await fetchAllPokemon(pageNumber);
      let allPokemonDetails = await fetchAllPokemonDetails(allPokemons);
      return { pageNumber: pageNumber, pokemons: allPokemonDetails };
    } catch (e) {
      return e;
    }
  }
);
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
      if (action.pageNumber === 1) {
        state.pokemons = [...action.payload.pokemons];
      } else {
        state.pokemons = [...state.pokemons, ...action.payload.pokemons];
      }
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

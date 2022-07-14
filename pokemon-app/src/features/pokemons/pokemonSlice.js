import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllPokemon } from "../../util/api/fetchAllPokemon";
import { fetchAllPokemonDetails } from "../../util/api/fetchAllPokemonDetails";

const initialState = {
  pokemons: [],
  savedPokemons: [],
  error: "",
  loading: false,
  currentClickCount: 1,
};

const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (clickNumber) => {
    try {
      let allPokemons = await fetchAllPokemon(clickNumber);
      let allPokemonDetails = await fetchAllPokemonDetails(allPokemons);
      return { pokemons: allPokemonDetails };
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
    setSavedPokemons: (state, action) => {
      state.savedPokemons = action.payload.pokemons;
    },
    increaseClickCount: (state) => {
      state.currentClickCount = state.currentClickCount + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      if (action.clickNumber === 1) {
        // This will be the case on the initial load of the pokemon listing page
        state.pokemons = [...action.payload.pokemons];
      } else {
        // This will be the case when the user clicks load more button
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

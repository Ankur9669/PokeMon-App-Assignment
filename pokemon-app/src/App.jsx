import React from "react";
import "./App.css";
import Login from "./pages/auth/login/Login";
import PokemonListing from "./pages/pokemonlistingpage/PokemonListing";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/requireauth/RequireAuth";
import { ToastContainer } from "react-toastify";
import SavedPokemons from "./pages/savedpokemons/SavedPokemons";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <PokemonListing />
            </RequireAuth>
          }
        />
        <Route
          path="/saved-pokemons"
          element={
            <RequireAuth>
              <SavedPokemons />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

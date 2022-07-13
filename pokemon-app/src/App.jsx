import React from "react";
import "./App.css";
import Login from "./pages/auth/login/Login";
import PokemonListing from "./pages/pokemonlistingpage/PokemonListing";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/requireauth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/pokemonlisting"
          element={
            <RequireAuth>
              <PokemonListing />
            </RequireAuth>
            // <PokemonListing />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

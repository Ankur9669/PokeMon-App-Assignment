import React, { useState } from "react";
import Button from "../buttons/Button";
import "./navbar.css";
import User from "./user/User";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authActions } from "../../features/auth/authSlice";
import { pokemonActions } from "../../features/pokemons/pokemonSlice";
import { getFilteredPokemons } from "../../util/getFilteredPokemons";
import SearchItem from "./searchitem/SearchItem";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemon);
  const [searchValue, setSearchValue] = useState("");
  const [toShowSearchedPokemons, setToShowSearchedPokemons] = useState(false);
  const [searchedPokemons, setSearchedPokemons] = useState([]);

  const handleLogoutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    dispatch(authActions.logoutUser());
  };
  const handleSearchChange = (e) => {
    if (e.target.value.length > 0) {
      setToShowSearchedPokemons(true);
    } else {
      setToShowSearchedPokemons(false);
    }
    setSearchValue(e.target.value);
    const searchedPokemons = getFilteredPokemons(pokemons, e.target.value);
    setSearchedPokemons(searchedPokemons);
  };
  return (
    <div className="navbar">
      <div className="navbar-app-container">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            alt="pokeball"
            className="navbar-pokeball-icon"
          />
        </div>
        <div className="navbar-search-container">
          <input
            type="search"
            className="navbar-search"
            placeholder="Search pokemons..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          {toShowSearchedPokemons && (
            <div className="search-items-container">
              {searchedPokemons.map((pokemon) => (
                <SearchItem key={pokemon.id} pokemonDetails={pokemon} />
              ))}
            </div>
          )}
        </div>

        <div className="user-details-button-container">
          <Button buttonText="Logout" onClick={handleLogoutClick} />
          <div className="user-details">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

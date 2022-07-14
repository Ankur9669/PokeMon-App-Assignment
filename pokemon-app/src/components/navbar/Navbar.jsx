import React, { useState } from "react";
import "./navbar.css";
import {
  User,
  Button,
  useAppDispatch,
  useAppSelector,
  authActions,
  getFilteredPokemons,
  SearchItem,
  getAuth,
  signOut,
  showToast,
  BsFillHeartFill,
  useNavigate,
} from "./index";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pokemons } = useAppSelector((state) => state.pokemon);
  const [searchValue, setSearchValue] = useState("");
  const [toShowSearchedPokemons, setToShowSearchedPokemons] = useState(false);
  const [searchedPokemons, setSearchedPokemons] = useState([]);

  const handleLogoutClick = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(authActions.logoutUser());
      showToast("SUCCESS", "User Logged Out Successfully");
    } catch (e) {
      showToast("ERROR", "Could not Logout User");
    }
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
        <div onClick={() => navigate("/")}>
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
          <BsFillHeartFill
            className="saved-pokemons-icon"
            onClick={() => navigate("/saved-pokemons")}
          />
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

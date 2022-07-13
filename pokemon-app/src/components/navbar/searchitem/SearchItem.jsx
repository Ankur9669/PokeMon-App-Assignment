import React from "react";
import "./search-item.css";

const SearchItem = (props) => {
  const { pokemonDetails } = props;
  const { name, imageUrl, type } = pokemonDetails;

  return (
    <div className="search-item-container">
      <div className="search-item-image-container">
        <img src={imageUrl} className="search-item-image" alt="search-item" />
      </div>
      <div className="search-item-content-container">
        <p className="search-item-text search-item-text-bold">{name}</p>
        <p className="search-item-text">{type}</p>
      </div>
    </div>
  );
};

export default SearchItem;

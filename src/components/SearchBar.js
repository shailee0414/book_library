import React from "react";

import "../css/SearchBar.css";

export const SearchBar = ({ onChangeText, text, onClick, onKeyPress }) => {
  return (
    <div className="ui container" id="searchBar">
      <div className="ui large  action input">
        <input
          type="text"
          placeholder="Type title or author name"
          value={text}
          onKeyDown={onKeyPress}
          onChange={(e) => {
            text = e.target.value;
            onChangeText(e.target.value);
          }}
        />
        <button className="ui button" onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export const Search = ({ onChangeText, text }) => {
  return (
      <div className="ui mini icon input">
        <input
          type="text"
          placeholder="Search subjects"
          style={{ borderRadius: "5px" }}
          onChange={(e) => {
            text = e.target.value;
            onChangeText(e.target.value);
          }}
        />
        <i className="search icon"></i>
      </div>
  );
};

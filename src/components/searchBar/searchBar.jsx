import React from "react";
import "./searchBar.css";

export default function searchBar(props) {
  return (
    <input
      type="text"
      onChange={(event) => props.filterHadler(event)}
      className="searchBar"
      placeholder="Search..."
    />
  );
}

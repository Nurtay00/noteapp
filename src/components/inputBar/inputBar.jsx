import React from "react";

import "./inputBar.css";

export default function inputBar(props) {
  var newitem = {
    title: "ok",
    body: "ok",
    userId: "11",
  };
  return (
    <div className="wrapper__inputBar">
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        onChange={(event) => (newitem.body = event.target.value)}
        className="inputBar"
        placeholder="Enter your note here..."
      ></textarea>
      <button
        onClick={() => props.addHandler(newitem)}
        className="inputBar__btn"
      >
        aadd
      </button>
    </div>
  );
}

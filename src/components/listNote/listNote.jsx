import React from "react";

import "./listNote.css";

export default function listNote(props) {
  const { list } = props;
  return (
    <div className="list">
      {list.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card__title">{item.title}</div>
            <div>{item.body}</div>
          </div>
        );
      })}
    </div>
  );
}

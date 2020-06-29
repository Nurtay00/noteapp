import React from "react";

import "./Loading.css";
export default function Loading() {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

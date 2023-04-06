import React, { useContext } from "react";
import { UserContext } from "../context/UserContex";

export default function SwitchButton() {

  let value = useContext(UserContext)

  return (
    <button
      className={`btn ${value.isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={value.changeMode}
    >
      {value.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

import { useContext } from "react";
import { UserContext } from "../context/UserContex";

function Header() {
  let value = useContext(UserContext);
  return (
    <h1 className={`heading ${value.isDarkMode ? "heading-dark" : "heading-light"}`}>
      {value.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

// Components
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginNavigate = () => {
    setIsAuth(false);
    navigate("/login");
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={() => loginNavigate()}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;

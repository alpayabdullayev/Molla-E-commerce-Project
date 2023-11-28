import React, { useContext } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsBox2HeartFill } from "react-icons/bs";
import { MainContext } from "../../context/MainContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import "./index.scss"
import { DarkModeContext } from "../../context/DarkModeContext";


const Buttons = () => {
    const {basketOpen,wishlistiOpen} = useContext(MainContext)
    const {theme, handleDarkMode} = useContext(DarkModeContext)
  return (
    <div className="buttonsOpen">
        <div className="container">
        <button onClick={() => basketOpen()}>
        <MdLocalGroceryStore />
      </button>
      <button onClick={() => wishlistiOpen()}>
        <BsBox2HeartFill />
      </button>
      <button onClick={handleDarkMode}>{theme ? <CiLight /> :<MdDarkMode /> }</button>
        </div>
    </div>
  );
};

export default Buttons;

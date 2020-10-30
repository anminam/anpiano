import { setConfig } from "Core/piano/actions";
import { RootState } from "Core/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuButton = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: RootState) => state.piano.config.isSideMenuOpen
  );
  const handleClick = () => {
    dispatch(setConfig("isSideMenuOpen", !isOpen));
  };
  return (
    <div className="menu-button" onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuButton;

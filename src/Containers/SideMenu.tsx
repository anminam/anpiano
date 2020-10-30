import MenuButton from "Components/MenuButton";
import { RootState } from "Core/Store";
import React from "react";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.piano.config.isSideMenuOpen
  );
  return (
    <div className={`side_menu ${isSideMenuOpen ? "open" : ""}`}>
      <div className="side_menu__button_wapper">
        <MenuButton />
      </div>
      <div className="side_menu__title">Menu</div>
      <ul className="side_menu__list">
        <li>
          <button type="button">
            <h3 className="item-name">Vocal</h3>
          </button>
        </li>
        <li>
          <button type="button">
            <h3 className="item-name">Piano</h3>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;

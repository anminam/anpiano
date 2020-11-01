import MenuButton from "Components/MenuButton";
import { setConfig } from "Core/piano/actions";
import { RootState } from "Core/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SideMenu = () => {
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.piano.config.isSideMenuOpen
  );

  const dispatch = useDispatch();

  return (
    <div className={`side_menu`}>
      <div className={`side_menu__wapper ${isSideMenuOpen ? "open" : ""}`}>
        <div
          className="side_menu__background"
          onClick={() => dispatch(setConfig("isSideMenuOpen", false))}
        ></div>
        <div className="side_menu__contents">
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
      </div>
    </div>
  );
};

export default SideMenu;

import Logo from "Components/Logo";
import MenuButton from "Components/MenuButton";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <MenuButton />
      <Logo />
    </header>
  );
};

export default Header;

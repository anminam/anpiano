import React from "react";
import PianoKyes from "Containers/PianoKyes";
import PianoConfig from "Containers/PianoConfig";
import LionContainer from "Components/LionConainer";
import PianoScalePractice from "Containers/PianoScalePractice";

const MainPage = () => {
  return (
    <div className="page main-page">
      <div className="top-wapper">
        <LionContainer />
        <PianoKyes />
      </div>
      <PianoConfig />
      <PianoScalePractice />
    </div>
  );
};

export default MainPage;

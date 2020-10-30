import React from "react";
import PianoKyes from "Containers/PianoKyes";
import PianoConfig from "Containers/PianoConfig";
import LionContainer from "Components/LionConainer";
import PianoScalePractice from "Containers/PianoScalePractice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-wapper">
          <LionContainer />
          <PianoKyes />
        </div>
        <PianoConfig />
        <PianoScalePractice />
      </header>
    </div>
  );
}

export default App;

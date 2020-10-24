import React from "react";
import PianoKyes from "Containers/PianoKyes";
import { Utils } from "Core/Utils";
import * as Tone from "tone";
import Button from "Components/Button";

const synth = new Tone.Synth().toDestination();

function App() {
  const handleScale = () => {
    const list = Utils.getScale5("C3");
    const now = Tone.now();
    list.forEach((v, i) => synth.triggerAttackRelease(v, "8n", now + i * 0.5));
  };
  return (
    <div className="App">
      <header className="App-header">
        <PianoKyes />
        <Button text="화음" onClick={handleScale} />
      </header>
    </div>
  );
}

export default App;

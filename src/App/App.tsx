import React from "react";
import PianoKyes from "Containers/PianoKyes";
import { Utils } from "Core/Utils";
import * as Tone from "tone";

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
        <button onClick={handleScale}>화음</button>
      </header>
    </div>
  );
}

export default App;

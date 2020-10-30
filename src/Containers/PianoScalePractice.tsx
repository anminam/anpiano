import Button from "Components/Button";
import { Utils } from "Core/Utils";
import usePianoKey from "Hooks/usePianoKey";
import { IKeyTone } from "Interface/IKeyTone";
import React from "react";

const PianoScalePractice = () => {
  const { triggerAttackRelease } = usePianoKey();
  const handleScale = (tone: IKeyTone) => {
    const list = Utils.getScale5(tone);
    triggerAttackRelease(list, "8n", 500);
  };
  return (
    <div className="piano_scale_container container">
      <ul>
        <li>
          <Button text="C Scale" onClick={() => handleScale("C3")} />
        </li>
        <li>
          <Button text="C# Scale" onClick={() => handleScale("C#3")} />
        </li>
      </ul>
    </div>
  );
};

export default PianoScalePractice;

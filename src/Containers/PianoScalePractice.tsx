import Button from "Components/Button";
import { Utils } from "Core/Utils";
import usePianoKey from "Hooks/usePianoKey";
import React from "react";

const PianoScalePractice = () => {
  const { triggerAttackRelease } = usePianoKey();
  const handleScale = () => {
    const list = Utils.getScale5("C3");
    triggerAttackRelease(list, "8n", 500);
  };
  return (
    <div className="piano_scale_container">
      <Button text="C Scale" onClick={handleScale} />
    </div>
  );
};

export default PianoScalePractice;

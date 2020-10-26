import React, { useEffect, useState } from "react";
import { IKeyTone } from "Interface/IKeyTone";
import { Utils } from "Core/Utils";
import { Piano } from "Core/Piano";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Core/Store";
import { pianoTrigger } from "Core/piano/actions";

// const now = Tone.now();

interface IProps {
  tone: IKeyTone;
  isActive: boolean;
  onToneClick: (tone: IKeyTone) => void;
}
const Key = ({ tone, isActive, onToneClick }: IProps) => {
  const [blackPosition, setBlackPosition] = useState<number>();

  useEffect(() => {
    setBlackPosition(Utils.getBlackPosition(tone));
  }, [tone]);

  const className = `key ${tone.includes("#") ? "black" : ""} ${
    isActive ? "active" : ""
  }`;

  useEffect(() => {
    if (isActive) {
      Piano.trigger(tone);
    } else {
    }
  }, [isActive]);

  return (
    <div
      className={className}
      style={{ left: blackPosition }}
      onMouseDown={() => onToneClick(tone)}
      data-tone={tone}
    >
      <span className="key__name">{tone}</span>
    </div>
  );
};

export default Key;

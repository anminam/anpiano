import React, { useEffect, useState } from "react";
import { IKeyTone } from "Interface/IKeyTone";
import { Utils } from "Core/Utils";
import { Piano } from "Core/Piano";

// const now = Tone.now();

interface IProps {
  tone: IKeyTone;
  isActive: boolean;
  onMouseDown: (tone: IKeyTone) => void;
  onMouseUp: (tone: IKeyTone) => void;
}
const Key = ({ tone, isActive, onMouseDown, onMouseUp }: IProps) => {
  const [blackPosition, setBlackPosition] = useState<number>();
  const [isHavePrime] = useState<boolean>(Utils.isPrime(tone));

  useEffect(() => {
    setBlackPosition(Utils.getBlackPosition(tone));
  }, [tone]);

  const className = `key ${tone.includes("#") ? "black" : "white"} ${
    isHavePrime ? "prime" : ""
  }
  ${isActive ? "active" : ""}`;

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
      onMouseDown={() => onMouseDown(tone)}
      onMouseUp={() => onMouseUp(tone)}
      data-tone={tone}
    >
      <span className="key__name">{tone}</span>
    </div>
  );
};

export default Key;

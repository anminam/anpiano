import { pianoRelese, pianoTrigger } from "Core/piano/actions";
import { RootState } from "Core/Store";
import { Utils } from "Core/Utils";
import { IKeyTone } from "Interface/IKeyTone";
import { IToneKeyboard } from "Interface/IToneKeyboard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Key from "./piano/Key";

interface IProps {}
const PianoKyes = ({}: IProps) => {
  const tones = useSelector((state: RootState) => state.piano.tones);
  const dispatch = useDispatch();

  const pressKey = (tone: IKeyTone) => {
    dispatch(pianoTrigger(tone));

    setTimeout(() => {
      dispatch(pianoRelese(tone));
    }, 500);
  };

  // 키보드
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    let value = Utils.getKeyToTone(key);
    if (!value) return;

    const index = tones?.findIndex((v) => {
      return v.tone === value;
    });
    const toneObj = tones[index];
    pressKey(toneObj.tone);
  };

  const handleToneClick = (tone: IKeyTone) => {
    pressKey(tone);
  };

  return (
    <div
      className="piano-kyes"
      onKeyPress={handleKeyDown}
      // onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      <div className="piano-kyes__whites">
        {tones &&
          tones.map((item) => {
            return (
              <Key
                key={item.tone}
                tone={item.tone}
                onToneClick={handleToneClick}
                isActive={item.isValue}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PianoKyes;

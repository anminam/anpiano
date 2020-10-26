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
  };

  const upKey = (tone: IKeyTone) => {
    dispatch(pianoRelese(tone));
  };

  const getTonesIndex = (key: string): number => {
    let value = Utils.getKeyToTone(key);
    if (!value) return -1;
    const index = tones?.findIndex((v) => {
      return v.tone === value;
    });
    return index;
  };

  // 키보드
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = getTonesIndex(event.key);
    const toneObj = tones[index];
    if (!toneObj) return;
    pressKey(toneObj.tone);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    const index = getTonesIndex(event.key);
    const toneObj = tones[index];
    if (!toneObj) return;
    upKey(toneObj.tone);
  };

  const handleKeyMouseDown = (tone: IKeyTone) => {
    pressKey(tone);
  };
  const handleKeyMouseUp = (tone: IKeyTone) => {
    upKey(tone);
  };

  return (
    <div
      className="piano-kyes"
      onKeyPress={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      <div className="piano-kyes__whites">
        {tones &&
          tones.map((item) => {
            return (
              <Key
                key={item.tone}
                tone={item.tone}
                onMouseDown={handleKeyMouseDown}
                onMouseUp={handleKeyMouseUp}
                isActive={item.isValue}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PianoKyes;

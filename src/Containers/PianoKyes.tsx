import { Utils } from "Core/Utils";
import { IKeyTone } from "Interface/IKeyTone";
import { IToneKeyboard } from "Interface/IToneKeyboard";
import React, { useEffect, useState } from "react";
import Key from "./piano/Key";

interface IProps {}
const PianoKyes = ({}: IProps) => {
  const [tones, setTones] = useState<IToneKeyboard[]>();

  useEffect(() => {
    const list = Utils.getKeyTones(3, 4);
    const newList: IToneKeyboard[] = [];
    list.forEach((v) => {
      newList.push({
        tone: v,
        isValue: false,
      });
    });
    setTones(newList);
    // debugger;
  }, []);

  // 키보드
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    let value = Utils.getKeyToTone(key);

    const index = tones?.findIndex((v) => {
      return v.tone === value;
    });

    updateTones(true, index);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    let value = Utils.getKeyToTone(key);

    const index = tones?.findIndex((v) => {
      return v.tone === value;
    });

    updateTones(false, index);
  };

  const updateTones = (isValue: boolean, index?: number) => {
    if (index === undefined || index === -1) {
      return;
    }

    if (!tones) {
      return;
    }

    try {
      if (tones) {
        const array: IToneKeyboard[] = [...tones];
        array[index].isValue = isValue;
        setTones(array);
      }
    } catch (e) {}
  };

  return (
    <div
      className="piano-kyes"
      onKeyPress={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      <div
        className="piano-kyes__whites"
        // onKeyDown={handleKeyDown}
      >
        {tones &&
          tones.map((item) => {
            return (
              <Key
                key={item.tone}
                tone={item.tone}
                trigger={item.isValue}
                // tones={list}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PianoKyes;

import React, { useEffect, useState } from "react";
import { IKeyTone } from "Interface/IKeyTone";
import { Utils } from "Core/Utils";
import * as Tone from "tone";
const synth = new Tone.Synth().toDestination();
// const now = Tone.now();

interface IProps {
  tone: IKeyTone;
  tones?: IKeyTone[];
  trigger?: boolean;
  onToneClick?: () => void;
}
const Key = ({ tone, tones, trigger }: IProps) => {
  const [blackPosition, setBlackPosition] = useState<number>();
  const [active, setActive] = useState<boolean>(false);
  const [_trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    setTrigger(trigger ? true : false);
  }, [trigger]);

  useEffect(() => {
    setBlackPosition(Utils.getBlackPosition(tone));
  }, [tone]);

  useEffect(() => {
    if (_trigger) {
      setActive(true);
      start();
    } else {
      setActive(false);
    }
  }, [_trigger]);

  const start = () => {
    // const now = Tone.now();

    synth.triggerAttackRelease(tone, "8n");
  };

  const handleClick = () => {
    setTrigger(true);
    setTimeout(() => {
      setTrigger(false);
    }, 500);
  };

  const className = `key ${tone.includes("#") ? "black" : ""} ${
    active ? "active" : ""
  }`;

  return (
    <div
      className={className}
      style={{ left: blackPosition }}
      onMouseDown={handleClick}
      data-tone={tone}
    >
      <span className="key__name">{tone}</span>
    </div>
  );
};

export default Key;

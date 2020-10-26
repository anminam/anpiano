import { IKeyTone } from "Interface/IKeyTone";

export const PIANO_TRIGGER = "PIANO_TRIGGER" as const;
export const PIANO_RELEASE = "PIANO_RELEASE" as const;

export const pianoTrigger = (tone: IKeyTone) => {
  return {
    type: PIANO_TRIGGER,
    payload: tone,
  };
};

export const pianoRelese = (tone: IKeyTone) => {
  return {
    type: PIANO_RELEASE,
    payload: tone,
  };
};

export type PianoActions =
  | ReturnType<typeof pianoTrigger>
  | ReturnType<typeof pianoRelese>;

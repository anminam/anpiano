import { IKeyTone } from "Interface/IKeyTone";
import { TPianoConfigValue } from "Interface/IPianoConfig";

export const PIANO_TRIGGER = "PIANO_TRIGGER" as const;
export const PIANO_RELEASE = "PIANO_RELEASE" as const;
export const SET_PRINT_TONE = "SET_PRINT_TONE" as const;
export const SET_CONFIG = "SET_CONFIG" as const;

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

export const setPrintTone = (isTone: boolean) => {
  return {
    type: SET_PRINT_TONE,
    payload: isTone,
  };
};

export const setConfig = (name: string, value: TPianoConfigValue) => {
  return {
    type: SET_CONFIG,
    payload: {
      name,
      value,
    },
  };
};

export type PianoActions =
  | ReturnType<typeof pianoTrigger>
  | ReturnType<typeof pianoRelese>
  | ReturnType<typeof setPrintTone>
  | ReturnType<typeof setConfig>;

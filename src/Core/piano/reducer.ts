import { Utils } from "Core/Utils";
import { IPianoConfig } from "Interface/IPianoConfig";
import { IToneKeyboard } from "Interface/IToneKeyboard";
import {
  PianoActions,
  PIANO_RELEASE,
  PIANO_TRIGGER,
  SET_CONFIG,
  SET_PRINT_TONE,
} from "./actions";

interface IState {
  tones: IToneKeyboard[];
  config: IPianoConfig;
}

const temp = Utils.initTones(3, 4);
const initState: IState = {
  tones: temp,
  config: {
    isTonePrint: true,
    isKeyboradPrint: false,
    isViewLion: false,
  },
};

const pianoReducer = (state: IState = initState, actions: PianoActions) => {
  switch (actions.type) {
    case PIANO_TRIGGER:
      const tone = actions.payload;
      const index = state.tones.findIndex((v) => v.tone === tone);
      const newTones = [...state.tones];
      newTones[index].isValue = true;
      return {
        ...state,
        tones: [...newTones],
      };
    case PIANO_RELEASE: {
      const tone = actions.payload;
      const index = state.tones.findIndex((v) => v.tone === tone);
      const newTones = [...state.tones];
      newTones[index].isValue = false;
      return {
        ...state,
        tones: [...newTones],
      };
    }
    case SET_PRINT_TONE:
      return {
        ...state,
        isPrintTone: actions.payload,
      };
    case SET_CONFIG:
      return {
        ...state,
        config: {
          ...state.config,
          [actions.payload.name]: actions.payload.value,
        },
      };
    default:
      return state;
  }
};

export default pianoReducer;

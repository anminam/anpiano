import { Utils } from "Core/Utils";
import { IToneKeyboard } from "Interface/IToneKeyboard";
import {
  PianoActions,
  PIANO_RELEASE,
  PIANO_TRIGGER,
  SET_PRINT_TONE,
} from "./actions";

interface IState {
  tones: IToneKeyboard[];
  isPrintTone: boolean;
}

const temp = Utils.initTones(3, 4);
const initState: IState = {
  tones: temp,
  isPrintTone: true,
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
    default:
      return state;
  }
};

export default pianoReducer;

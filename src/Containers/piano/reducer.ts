import { Utils } from "Core/Utils";
import { IKeyTone } from "Interface/IKeyTone";
import { IToneKeyboard } from "Interface/IToneKeyboard";
import { PianoActions, PIANO_RELEASE, PIANO_TRIGGER } from "./actions";

interface IState {
  list: IKeyTone[];
}

const initState: IState = {
  list: Utils.getKeyTones(3, 4),
};

const pianoReducer = (state: IState, actions: PianoActions) => {
  switch (actions.type) {
    case PIANO_TRIGGER:
      break;
    case PIANO_RELEASE:
      break;
  }
};

export default pianoReducer;

import { pianoRelese, pianoTrigger } from "Core/piano/actions";
import { RootState } from "Core/Store";
import { IKeyTone } from "Interface/IKeyTone";
import { useDispatch, useSelector } from "react-redux";

const usePianoKey = () => {
  const tones = useSelector((state: RootState) => state.piano.tones);
  const dispatch = useDispatch();

  const downKey = (tone: IKeyTone): void => {
    dispatch(pianoTrigger(tone));
  };
  const autoDown = (tone: IKeyTone, releaseSpeed: number = 100): void => {
    dispatch(pianoTrigger(tone));
    setTimeout(() => {
      dispatch(pianoRelese(tone));
    }, releaseSpeed);
  };

  const setIntervali = (
    callback: () => void,
    time: number,
    isImmi: boolean = false
  ) => {
    if (isImmi) {
      callback();
    }
    return setInterval(callback, time);
  };

  const upKey = (tone: IKeyTone) => {
    dispatch(pianoRelese(tone));
  };
  const triggerAttackRelease = (
    tone: IKeyTone | IKeyTone[],
    tempo: String,
    speed: number = 100
  ) => {
    if (Array.isArray(tone)) {
      const tones = [...tone].reverse();

      const timeFunc = setIntervali(
        () => {
          const rTone = tones.pop();
          if (rTone) {
            autoDown(rTone);
          } else {
            clearInterval(timeFunc);
          }
        },
        speed,
        true
      );
    } else {
      autoDown(tone, speed);
    }
  };

  return { tones, downKey, upKey, autoDown, triggerAttackRelease };
};

export default usePianoKey;

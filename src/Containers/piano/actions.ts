export const PIANO_TRIGGER = "PIANO_TRIGGER" as const;
export const PIANO_RELEASE = "PIANO_RELEASE" as const;

export const pianoTrigger = () => {
  return {
    type: PIANO_TRIGGER,
  };
};

export const pianoRelese = () => {
  return {
    type: PIANO_RELEASE,
  };
};

export type PianoActions =
  | ReturnType<typeof pianoTrigger>
  | ReturnType<typeof pianoRelese>;

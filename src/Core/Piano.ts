import { IKeyTone } from "Interface/IKeyTone";
import * as Tone from "tone";
import { Frequency, NormalRange, Time } from "tone/build/esm/core/type/Units";
const synth = new Tone.Synth().toDestination();

export class Piano {
  static trigger(tone: IKeyTone) {
    synth.triggerAttackRelease(tone, "8n");
  }

  static triggerAttackRelease(
    note: Frequency,
    duration: Time,
    time?: Time,
    velocity?: NormalRange
  ) {}
}

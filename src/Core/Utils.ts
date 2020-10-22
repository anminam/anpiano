import { IKeyTone } from "Interface/IKeyTone";

export class Utils {
  static sacleWhite = ["C", "D", "E", "F", "G", "A", "B"];
  static sacleBlack = ["C", "D", "F", "G", "A"];

  static makeScale(start: number): IKeyTone[] {
    return this.sacleWhite.map((v) => (v + start) as IKeyTone);
  }
  static makeScaleAll(start: number): IKeyTone[] {
    let list: IKeyTone[] = [];
    this.sacleWhite.forEach((v) => {
      list.push((v + start) as IKeyTone);
      if (this.sacleBlack.includes(v)) {
        list.push((v + "#" + start) as IKeyTone);
      }
    });
    return list;
  }

  static getKeyTones(start: number, end: number = 0): IKeyTone[] {
    if (end === 0) {
      return this.makeScaleAll(start);
    }

    let list: IKeyTone[] = [];
    for (let i = start; i <= end; i++) {
      // list.push("C1");
      list = [...list, ...this.makeScaleAll(i)];
    }
    return list;
  }

  static getScale5(startTone: IKeyTone): IKeyTone[] {
    const a: IKeyTone[] = [
      "C3",
      "D3",
      "E3",
      "F3",
      "G3",
      "F3",
      "E3",
      "D3",
      "C3",
    ];

    return a;
  }

  static getKeyToTone(key: string): IKeyTone | undefined {
    let result: IKeyTone | undefined;
    interface IKeyValue {
      [key: string]: IKeyTone;
    }
    const obj: IKeyValue = {
      a: "C3" as IKeyTone,
      w: "C#3" as IKeyTone,
      s: "D3" as IKeyTone,
      e: "D#3" as IKeyTone,
      d: "E3" as IKeyTone,
      f: "F3" as IKeyTone,
      t: "F#3" as IKeyTone,
      g: "G3" as IKeyTone,
      y: "G#3" as IKeyTone,
      h: "A3" as IKeyTone,
      u: "A#3" as IKeyTone,
      j: "B3" as IKeyTone,
      i: "B#3" as IKeyTone,
      k: "C4" as IKeyTone,
    };

    if (obj.hasOwnProperty(key)) {
      result = obj[key];
    }
    return result;
  }

  static positionStart = 30;
  static getBlackPosition(target: IKeyTone): number {
    if (!target.includes("#")) {
      return 0;
    }

    const targetMinusShap = target.replace("#", "");
    const parentTone = document.querySelector(`[data-tone=${targetMinusShap}]`);
    const parnetToneX =
      (parentTone?.getBoundingClientRect().x || 0) + this.positionStart;

    return parnetToneX;
  }
}

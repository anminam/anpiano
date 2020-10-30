import Checkbox from "Components/Checkbox";
import { setConfig, setPrintTone } from "Core/piano/actions";
import { RootState } from "Core/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PianoConfig = () => {
  const dispatch = useDispatch();

  const configObj = useSelector((state: RootState) => state.piano.config);
  const handleIsPrintCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    dispatch(setConfig("isTonePrint", checked));
  };

  const handleIsKeyboardPrintCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    dispatch(setConfig("isKeyboradPrint", checked));
  };
  return (
    <div className="piano_config">
      <ul>
        <li>
          <Checkbox
            id={"isPrintBox"}
            value={configObj.isTonePrint}
            onChanged={handleIsPrintCheckboxChange}
            text={"음계보이기"}
          />
        </li>
        <li>
          <Checkbox
            id={"isKeyboardPrintCheckBox"}
            value={configObj.isKeyboradPrint}
            onChanged={handleIsKeyboardPrintCheckboxChange}
            text={"키보드 보이기"}
          />
        </li>
        <li>
          <Checkbox
            id={"isViewLionCheckBox"}
            value={configObj.isViewLion}
            onChanged={(event) =>
              dispatch(setConfig("isViewLion", event.target.checked))
            }
            text={"라이언 보이기"}
          />
        </li>
      </ul>
    </div>
  );
};

export default PianoConfig;

import { setConfig, setPrintTone } from "Core/piano/actions";
import { RootState } from "Core/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PainoConfig = () => {
  const dispatch = useDispatch();

  const isPrintTone = useSelector(
    (state: RootState) => state.piano.config.isTonePrint
  );
  const handleIsPrintCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    dispatch(setConfig("isTonePrint", checked));
  };

  const isKeyboradPrint = useSelector(
    (state: RootState) => state.piano.config.isKeyboradPrint
  );
  const isViewLionCheckBox = useSelector(
    (state: RootState) => state.piano.config.isViewLion
  );

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
          <input
            type="checkbox"
            id="isPrintBox"
            checked={isPrintTone}
            onChange={handleIsPrintCheckboxChange}
          />
          <label htmlFor="isPrintBox">음계 보이기</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="isKeyboardPrintCheckBox"
            checked={isKeyboradPrint}
            onChange={handleIsKeyboardPrintCheckboxChange}
          />
          <label htmlFor="isKeyboardPrintCheckBox">키보드 보이기</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="isViewLionCheckBox"
            checked={isViewLionCheckBox}
            onChange={(event) =>
              dispatch(setConfig("isViewLion", event.target.checked))
            }
          />
          <label htmlFor="isViewLionCheckBox">라이언 보이기</label>
        </li>
      </ul>
    </div>
  );
};

export default PainoConfig;

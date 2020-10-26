import { setPrintTone } from "Core/piano/actions";
import { RootState } from "Core/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PainoConfig = () => {
  const dispatch = useDispatch();
  const isPrintTone = useSelector(
    (state: RootState) => state.piano.isPrintTone
  );

  const handleIsPrintCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    dispatch(setPrintTone(checked));
  };
  return (
    <div className="piano_config">
      <div>
        <input
          type="checkbox"
          id="isPrintBox"
          checked={isPrintTone}
          onChange={handleIsPrintCheckboxChange}
        />
        <label htmlFor="isPrintBox">보이기</label>
      </div>
    </div>
  );
};

export default PainoConfig;

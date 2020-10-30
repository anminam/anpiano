import React from "react";

interface IProps {
  id: string;
  text: string;
  value: boolean;
  onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, onChanged, text, value }: IProps) => {
  return (
    <div className="checkbox">
      <div className="checkbox__wapper">
        <div className="checkbox__container">
          <div className="toggle">
            <input
              type="checkbox"
              name="toggle"
              className="check-checkbox"
              id={id}
              checked={value}
              onChange={onChanged}
            />
            <label className="check-label" htmlFor={id}>
              <div id="background"></div>
              <span className="face">
                <span className="face-container">
                  <span className="eye left"></span>
                  <span className="eye right"></span>
                  <span className="mouth"></span>
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <p className="checkbox__label">{text}</p>
    </div>
  );
};

export default Checkbox;

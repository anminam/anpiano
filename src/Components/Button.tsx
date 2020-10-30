import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
}
const Button = ({ text, onClick }: IProps) => {
  return (
    <button className={`mini`} onClick={onClick}>
      <span className="text">{text}</span>
      <div className="content"></div>
    </button>
  );
};

export default Button;

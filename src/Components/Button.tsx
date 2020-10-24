import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
}
const Button = ({ text, onClick }: IProps) => {
  return (
    <button className={`mini`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

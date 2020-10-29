import React from "react";
import LionPng from "Assets/images/lion.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 100%;
`;
export interface ILionProps {
  className: string;
  size: string;
}
const Lion = ({ className, size }: ILionProps) => {
  return (
    <div className={className}>
      <Logo src={LionPng} />
    </div>
  );
};

export default Lion;

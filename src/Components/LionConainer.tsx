import { RootState } from "Core/Store";
import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Lion, { ILionProps } from "./Lion";

const LOGO_SIZE = "60px";
const DURATION = "1s";
const SHADOW_HEIGHT = `${Math.round(48 / 5)}px`;
const DROP_HEIGHT = "200px";
const OFFSET = "40px";

const bounce = keyframes`
  0%   {transform: translatey(0px);}
  20%  {transform: translatey(-100px);}
  25%  {transform: translatey(-110px);}
  80%  {transform: translatey(0px);}
  82%  {transform: translatey(-5px);}
  90%  {transform: translatey(0px);}
  92%  {transform: translatey(-3px);}
  100% {transform: translatey(0);}
`;

const grow = keyframes`
  from {
    transform: scale(0.2, 0.5);
  }
  to {
    transform: scale(1.5, 0.8);
  }
`;

const Container = styled.div`
  width: ${LOGO_SIZE};
  min-width: ${LOGO_SIZE};
  background-color: black;
  position: relative;
`;

const LogoWrapper = styled(Lion)<ILionProps>`
  width: ${LOGO_SIZE};
  position: absolute;
  bottom: 10px;
  animation-name: ${bounce};
  animation-duration: ${DURATION};
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  // animation-iteration-count: unset;
`;

const Shadow = styled.div`
  width: ${LOGO_SIZE};
  height: ${SHADOW_HEIGHT};
  background: radial-gradient(
    50% 50%,
    rgba(150, 150, 150, 1),
    rgba(150, 150, 150, 0.05)
  );
  position: absolute;
  bottom: 4px;
  left: calc(50% - ${LOGO_SIZE} / 2);
  // animation-name: ${grow};
  animation-duration: ${DURATION};
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  animation-iteration-count: infinite;
`;

function LionContainer() {
  const isViewLion = useSelector(
    (state: RootState) => state.piano.config.isViewLion
  );
  return (
    <Container className={isViewLion ? "" : "none"}>
      <LogoWrapper className={"lion"} size={LOGO_SIZE} />
      <Shadow />
    </Container>
  );
}

export default LionContainer;

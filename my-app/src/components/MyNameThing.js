import React from "react";
import styled from "styled-components";

const Smol = styled.span`
  color: #fff;
  font-size: 12px;
  display: block;
`;
const BigAssName = styled.h2`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 20px;
  width: 100%;
  color: transparent;
  -webkit-text-stroke: 1px #3add9d;
  letter-spacing: 5px;
  z-index: 99;
  text-align: center;
  text-transform: uppercase;
  word-break: break-all;
  pointer-events: none;
  padding: 0 20px;
  margin: 0;
  height: 20vh;
  top: 0;
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 50%;
    width: 1px;
    height: 40vh;
    background-color: #fae;
    bottom: 81px;
    transform: rotate(90deg);
  }
  @media (min-width: 1024px) {
    top: initial;
    &::before {
      bottom: 30vh;
      transform: rotate(0deg);
    }
    bottom: 10%;
    font-size: 40px;
    margin: initial;
  }
`;

const MyNameThing = props => {
  return (
    <BigAssName>
      <Smol>ordering burgers as</Smol>
      {props.name}
    </BigAssName>
  );
};

export default MyNameThing;

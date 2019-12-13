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
  bottom: 25%;
  font-size: 40px;
  width: 100%;
  color: transparent;
  -webkit-text-stroke: 1px #3add9d;
  letter-spacing: 5px;
  z-index: 99;
  text-align: center;
  text-transform: uppercase;
  word-break: break-all;
  padding: 0 20px;
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 50%;
    width: 1px;
    height: 40vh;
    background-color: #fae;
    bottom: 81px;
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

import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Controls = styled.div`
  position: relative;
  margin-top: auto;
  height: 13vh;
  display: flex;
  align-items: start;
  width: 100%;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  align-items: center;
  justify-content: space-around;
  background: ${props =>
    props.type === "meat"
      ? "linear-gradient(#5d16df, #c333c7)"
      : "linear-gradient(#5d16df, #9198e5)"};

  @media (min-width: 1024px) {
    flex-direction: ${props =>
      props.type === "meat" ? "row-reverse" : "initial"};
    align-items: initial;
    justify-content: initial;
    height: 23vh;
    border-top-right-radius: ${props =>
      props.type === "meat" ? "20%" : "70%"};
    border-top-left-radius: ${props => (props.type === "meat" ? "70%" : "20%")};
  }
`;

const Plus = styled.button`
  height: 3em;
  width: 3em;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  /* background-color: #332349; */
  margin-left: initial;
  margin-right: initial;
  background-color: #3add9d;
  color: #fff;
  font-weight: 800;

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: ease-in-out 0.2s;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
    margin-left: ${props => (props.type === "meat" ? "auto" : "3em")};
    margin-right: ${props => (props.type === "meat" ? "3em" : "auto")};
  }
`;

const ReallyBigNumber = styled.h2`
  width: 100%;
  position: absolute;
  text-align: center;
  font-size: 10em;
  bottom: 50px;
  line-height: 0;
  color: #9226d22b;
  -webkit-text-stroke: 2px #3add9d;
  pointer-events: none;
  z-index: -1;
  @media (min-width: 1024px) {
    font-size: 70vh;
    bottom: 71px;
  }
`;
const Min = styled.button`
  width: 2em;
  height: 2em;
  /* background-color: #4da6fa; */
  background-color: #5db4fe;
  color: #fff;
  border: none;
  font-size: 20px;
  border-radius: 50%;
  margin: 0;
  margin-top: 7%;
  font-weight: 800;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: ease-in-out 0.2s;
  }
  @media (min-width: 1024px) {
    margin: ${({ type }) => (type === "meat" ? "0 0 0 50%" : "0 50% 0 0")};
  }
`;

const Control = ({ type, name, tCount, tSet }) => {
  const docRef = db.doc(`users/${name}`);
  const Up = () => {
    tSet(tCount + 1);
    updateNumbers(tCount + 1);
  };

  const Down = () => {
    tSet(tCount === 0 ? tCount : tCount - 1);
    updateNumbers(tCount === 0 ? tCount : tCount - 1);
  };

  const updateNumbers = tCount => {
    docRef
      .set(
        {
          [type]: tCount
        },
        { merge: true }
      )
      .then(function() {
        // console.log("Status saved " + count);
      })
      .catch(function(error) {
        console.log("There is error: ", error);
      });
  };

  return (
    <>
      <Controls type={type}>
        <Plus type={type} onClick={Up}>
          +
        </Plus>
        <Min type={type} onClick={Down}>
          -
        </Min>
        <ReallyBigNumber>{tCount}</ReallyBigNumber>
      </Controls>
    </>
  );
};

export default Control;

// 1. Take a copy of the current state
// const names = { ...this.state.names };
// 2. Update that state. under this comment i try to update the burger value
// names[key].type = updatedNumber;
// 3. Set that to state
// this.setState({ names: names });

import React from "react";
import { db } from "../firebase";
import styled from "styled-components";

const Count = styled.span`
  position: absolute;
  background-color: #fed32d;
  color: #000;
  z-index: 3;
  font-size: 20px;
  padding: 1px 12px 1px 12px;
  background-color: #fed32d;
  border-radius: 10px;
  left: 45%;
  top: 20%;

  @media (min-width: 1024px) {
    font-size: 40px;
    left: 50%;
    top: 10%;
    border-radius: 20px;
    padding: 10px 22px 10px 22px;
  }
`;

const documet = db.collection("users");
let total = 0;

function Counter({ type, typeCount, typeSet }) {
  documet.onSnapshot(function(doc) {
    total = 0;
    doc.forEach(bob => {
      if (type === "meat" && bob.data().meat > 0) {
        total = total + bob.data().meat;
        // console.log(type, bob.data().meat);
      } else if (type === "vegan" && bob.data().vegan > 0) {
        total = total + bob.data().vegan;
        // console.log(type, bob.data().vegan);
      }
    });
    typeSet(total);
  });

  return <Count>{typeCount}</Count>;
}

export default Counter;

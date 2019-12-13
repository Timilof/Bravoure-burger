import React from "react";
import styled from "styled-components";
import Halves from "./Halves";
import Orderlist from "./Orderlist";
import MyNameThing from "./MyNameThing";
import { Redirect } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const types = ["meat", "vegan"];

const Burgers = props => {
  if (props.name === "Intern" || !props.name) return <Redirect to="/" />;
  return (
    <Wrapper className="App">
      <Orderlist mCount={props.mCount} vCount={props.vCount} />
      <MyNameThing name={props.name} />
      {types.map(typeNames => (
        <Halves
          names={props.names}
          setNames={props.setNames}
          name={props.name}
          setName={props.setName}
          type={typeNames}
          meatCount={props.meatCount}
          setMeat={props.setMeat}
          veganCount={props.veganCount}
          setVegan={props.setVegan}
          mCount={props.mCount}
          vCount={props.vCount}
          setV={props.setV}
          setM={props.setM}
        />
      ))}
    </Wrapper>
  );
};

export default Burgers;

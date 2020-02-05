import React from "react";
import styled from "styled-components";
import Halves from "./Halves";
import Orderlist from "./Orderlist";
import MyNameThing from "./MyNameThing";
import { Redirect } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const types = ["meat", "vegan"];

const Burgers = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });

  if (props.name === "Intern" || !props.name) return <Redirect to="/" />;
  return (
    <Wrapper className="App">
      {isDesktopOrLaptop && (
        <>
          <Orderlist mCount={props.mCount} vCount={props.vCount} />
        </>
      )}
      <MyNameThing name={props.name} />
      {types.map((typeNames, i) => (
        <>
          {!isDesktopOrLaptop && i === 1 && (
            <Orderlist mCount={props.mCount} vCount={props.vCount} />
          )}
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
        </>
      ))}
    </Wrapper>
  );
};

export default Burgers;

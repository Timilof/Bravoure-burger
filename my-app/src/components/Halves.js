import React from "react";
import Controller from "./Controls";
import Counter from "./Counter";
import styled from "styled-components";
import MeatImage from "../img/meat_burger.png";
import VeganImage from "../img/vegan_burger.png";

const Halfling = styled.div`
  display: flex;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  height: 100vh;
  background-image: url(https://huntpng.com/images250/white-grid-png-13.png);
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImageHolder = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 18%;
`;
const Burger = styled.img`
  /* position: absolute;
  top: 20%;
  left: 30%; */
  max-width: 300px;
`;

const Half = props => {
  return (
    <Halfling className="half">
      <Counter
        type={props.type}
        typeCount={props.type === "vegan" ? props.vCount : props.mCount}
        typeSet={props.type === "vegan" ? props.setV : props.setM}
      />
      <ImageHolder>
        <Burger
          value={props.type}
          className={props.type}
          src={props.type === "vegan" ? VeganImage : MeatImage}
          alt={
            props.type === "vegan"
              ? "a delicious vegan burger"
              : "a nasty meat burger eww!!"
          }
        />
      </ImageHolder>
      <Controller
        type={props.type}
        names={props.names}
        setNames={props.setNames}
        setName={props.setName}
        name={props.name}
        tCount={props.type === "vegan" ? props.veganCount : props.meatCount}
        tSet={props.type === "vegan" ? props.setVegan : props.setMeat}
      />
    </Halfling>
  );
};

export default Half;

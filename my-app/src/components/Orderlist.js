import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { db } from "../firebase";

const FolderButton = styled.button`
  background: #fed32c;
  /* background: #3add9d; */
  border: none;
  text-align: right;
  position: absolute;
  top: 20px;
  left: 44%;
  font-size: 23px;
  font-weight: 600;
  line-height: 0px;
  width: 200px;
  height: 26px;
  border-radius: 6px;
  z-index: 69;
  box-sizing: border-box;
  border: 1px solid #fed32c;
  background-image: url(https://icons-for-free.com/iconfiles/png/512/arrows+double+arrow+doublechevrondown+down+icon-1320185729599209775.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  &:focus {
    outline: none;
    border: 1px solid #fae;
  }
  &:hover {
    cursor: pointer;
    background-color: #1dd089;
    transition: 0.3s ease-in-out;
  }
  &::before {
    content: "Orders";
    pointer-events: none;
    margin: 0 10px;
    position: absolute;
    left: 0;
    font-size: 20px;
  }
`;
const MeatBoy = styled.span`
  background-color: #ee4a4b;
  margin-left: auto;
  border-radius: 6px;
  padding: 0px 2px 0 2px;
  color: #fff;
`;
const VeganBoy = styled.span`
  background-color: #38db9b;
  margin: 0 4px 0 2px;
  border-radius: 6px;
  padding: 0px 2px 0 2px;
  color: #fff;
`;
const ListItem = styled.p`
  align-items: center;
  text-overflow: ellipsis;
  font-weight: 500;
  margin: 0;
  padding: 3px 0 3px 8px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
`;
const Folder = styled(animated.div)`
  position: absolute;
  width: 200px;
  height: 0px;
  background-color: #ffecf2;
  border-radius: 6px;
  border: none;
  padding-top: 10px;
  top: 36px;
  left: 44%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 44;
  &::-webkit-scrollbar {
    width: 2px;
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
`;

let bigArray = [];
const documet = db.collection("users");
function doGetData() {
  // documet.onSnapshot(function(doc) {
  documet.get().then(querySnapshot => {
    bigArray.length = 0;
    querySnapshot.forEach(doc => {
      const tempName = doc.data().name;
      const tempVegan = doc.data().vegan;
      const tempMeat = doc.data().meat;
      bigArray.push({
        name: tempName,
        meat: tempMeat,
        vegan: tempVegan
      });
    });
  });
}
// console.log(bigArray);
// });

const Orderlist = ({ mCount, vCount }) => {
  const [userArray, setArray] = useState([]);
  const [fireDB, setfireDB] = useState(null);

  const [isToggled, setToggle] = useState(false);
  const roll = useSpring({
    backgroundColor: isToggled ? "#fff" : "#eee",
    height: isToggled ? "100px" : "0px",
    paddingTop: isToggled ? "10px" : "0px"
  });

  useEffect(() => {
    doGetData();
    setArray(bigArray);
  }, [mCount, vCount]);

  return (
    <>
      <FolderButton onClick={() => setToggle(!isToggled)}></FolderButton>
      <Folder style={roll}>
        {userArray.map(user => {
          if (user.meat >= 0 || user.vegan >= 0) {
            console.log(userArray);
            console.log(userArray[userArray.length - 1]);
            return (
              <ListItem>
                {user.name}
                {user.meat > 0 && <MeatBoy>+{user.meat}</MeatBoy>}
                {user.vegan > 0 && <VeganBoy>+{user.vegan}</VeganBoy>}
              </ListItem>
            );
          }
        })}
      </Folder>
    </>
  );
};
export default Orderlist;

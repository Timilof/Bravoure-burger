import React from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: 400;
  color: #fff;
`;
const StyledInput = styled.input`
  background-color: #fff;
  padding: 20px;
  font-size: 25px;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  outline: none;
  width: 25vw;
`;
const Styledcontainer = styled.div`
  margin: auto;
  display: flex;
  margin-top: 20vh;
  flex-direction: column;
  max-width: 30vw;
`;
const StyledHead = styled.h1`
  color: #ebe8f9;
  font-weight: 300;
`;
const StyledLink = styled(Link)`
  background-color: #fed32d;
  padding: 15px;
  width: 6em;
  text-decoration: none;
  color: #000;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 2px;
`;

// function getRealtimeUpdates() {
//   documet.onSnapshot(function(doc) {
//     let totalV = 0;
//     let totalM = 0;
//     documet.get().then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         const veganNum = doc.data().vegan;
//         const meatNum = doc.data().meat;
//         totalV = veganNum + totalV;
//         totalM = meatNum + totalM;
//       });
//       console.log("total number of vegan patties: " + totalV);
//       console.log("total number of meat patties: " + totalM);
//     });
//   });
// }

// getRealtimeUpdates();

function gettingnames(setNames, names) {
  const documet = db.collection("users");
  documet.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.data().name);
      setNames([...names, doc.data().name]);
      // setNames([...names, doc.data().name]);
      // nameArray.push(doc.data().name);
    });
    // console.log("this came from the signup caller");
    console.log(names);
  });
}

const SignUp = ({ name, setName, names, setNames }) => {
  // console.log(name);
  const onChange = e => {
    setName(e.target.value);
  };

  useEffect(() => {
    // function gettingnames(setNames, names) {
    //   const documet = db.collection("users");
    //   documet.get().then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.data().name);
    //       setNames([...names, doc.data().name]);
    //       // setNames([...names, doc.data().name]);
    //       // nameArray.push(doc.data().name);
    //     });
    //     // console.log("this came from the signup caller");
    //     console.log(names);
    //   });
    // }
  }, []);

  const addNameToNames = () => {
    gettingnames(setNames, names);
    setNames([...names, name]);

    console.log(names);
    const docRef = db.doc(`users/${name}`);
    docRef
      .set(
        {
          name: name,
          meat: 0,
          vegan: 0
        },
        { merge: true }
      )
      .then(function() {
        // console.log("Status saved");
      })
      .catch(function(error) {
        console.log("There is error: ", error);
      });
  };
  return (
    <Styledcontainer>
      <StyledInput
        type="name"
        required
        placeholder="Name"
        onChange={e => onChange(e)}
      />
      <StyledHead>
        Your name is: <StyledSpan>{name}</StyledSpan>
      </StyledHead>
      <StyledLink to="/burgers" onClick={addNameToNames}>
        Next >
      </StyledLink>
    </Styledcontainer>
  );
};

export default SignUp;

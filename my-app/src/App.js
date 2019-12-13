import React, { useState, useEffect } from "react";
import Burgers from "./components/Burgers";
import SignUp from "./components/SignUp";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "./firebase";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: auto;
    width: 100%;
    overflow: auto;
    font-size: 1.6rem;
    line-height: 1.45;
    background-color: #5d16df;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  }

  main {
    display: block;
  }

  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

let allMotherFathers = [];
let horsey = [];
let lastKeyTime = Date.now();
const reloader = () => {
  window.location.reload();
};
document.body.addEventListener("keydown", e => {
  const charList = "paarden is mijn motorfiets";
  const key = e.key.toLowerCase();
  if (charList.indexOf(key) === -1) return;
  const currentTime = Date.now();
  if (currentTime - lastKeyTime > 1000) {
    horsey = [];
  }
  horsey.push(key);
  lastKeyTime = currentTime;
  if (horsey.join("") === charList) {
    console.log("yeehaw");
    console.log(allMotherFathers);
    // now clear the firebase document of all motherfathers

    allMotherFathers.forEach(fathers => {
      db.collection("users")
        .doc(`${fathers}`)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          reloader();
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    });
  }
});

function App() {
  const [name, setName] = useState("Intern");
  const [names, setNames] = useState([]);
  const [meatCount, setMeat] = useState(0);
  const [veganCount, setVegan] = useState(0);
  const [mCount, setM] = useState(0);
  const [vCount, setV] = useState(0);
  allMotherFathers = names;

  useEffect(() => {
    if (name === undefined || !name) {
      reloader();
    }
  }, [name]);

  return (
    <>
      <GlobalStyle whiteColor />
      <Router>
        <Switch>
          <Route path="/burgers">
            <Burgers
              names={names}
              setNames={setNames}
              setName={setName}
              name={name}
              meatCount={meatCount}
              setMeat={setMeat}
              veganCount={veganCount}
              setVegan={setVegan}
              mCount={mCount}
              vCount={vCount}
              setV={setV}
              setM={setM}
            />
          </Route>
          <Route path="/">
            <SignUp
              names={names}
              setNames={setNames}
              name={name}
              setName={setName}
              meatCount={meatCount}
              setMeat={setMeat}
              veganCount={veganCount}
              setVegan={setVegan}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

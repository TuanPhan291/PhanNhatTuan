import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [getPointCharA, setPointCharA] = useState(1);
  const [getPointCharB, setPointCharB] = useState(1);
  const [getStatus, setStatus] = useState("");


  useEffect(() => {
    dislayStatus();

    console.log(getPointCharA, getPointCharB)
  }, [getPointCharA, getPointCharB]);

  function dislayStatus() {
    if (getPointCharA === getPointCharB) {
      setStatus("Same Point");
    } else if (getPointCharA > getPointCharB) {
      setStatus("A is winning");
    } else if (getPointCharA < getPointCharB) {
      setStatus("B is winning");
    }
  }

  const buttonStyle = {
    height: '18px',
    width: '50px',
    backgroundColor: 'green',
    marginRight: '1px'
  };

  const buttonPoint = <button className="pointA" style={buttonStyle} disabled={true}></button>

  function handleCick(e) {
    const ramdom = Math.random();

    if (ramdom > 0.5) {
      setPointCharA(pointA => pointA + 1);
    } else {
      setPointCharB(pointB => pointB + 1);
    }

  }

  const buttonA = Array.from({ length: getPointCharA }, (_, index) => index + 1);
  const buttonB = Array.from({ length: getPointCharB }, (_, index) => index + 1);


  function handleCickReset() {
    setPointCharA(1);
    setPointCharB(1);
  }

  

  return (
    <>
      <strong className="status-point">{getStatus}</strong>
      <p className="char-A">character A</p>

      <div dislay="flex">
        {buttonA.map(num => (
          <button style={buttonStyle}></button>
        ))}
      </div>

      <p className="char-B">character B</p>
      <div dislay="flex">
        {buttonB.map(num => (
          <button style={buttonStyle}></button>
        ))}
      </div>
      <br />

      <div dislay="flex">
        <button onClick={handleCick} style={{ marginRight: '1px' }} className="click">Race</button>
        <button onClick={handleCickReset} className="clickReset" hidden={(getPointCharA > 1 || getPointCharB > 1) ? false : true}>Reset</button>
      </div>

      <br />
    </>
  );
}

export default App;

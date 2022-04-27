import React from "react";
import Numbers from "./components/Numbers";
import Confetti from 'react-confetti'

function App() {

  const [num, setNum] = React.useState(()=>{
    const newNum = [];
    for(let i=0;i<10;i++) {
      newNum.push(Math.floor(Math.random()*6+1))
    }
    return newNum
  })

  const [ tileState, setTileState] = React.useState(()=>{
    const newTile = [];
    for(let i=0;i<10;i++) { newTile.push(false) }
    return newTile;
  })

  const isWon = false;

  function rollDice() {
    setNum(prevValue => {
      const newNum = [];
      for(let i=0;i<10;i++) {
        if(tileState[i] === false) {
          newNum.push(Math.floor(Math.random()*6+1))
        }
        else {
          newNum.push(prevValue[i])
        }
      }
      return newNum;
    })
  }

  function toggleNum(event, index) {    
    event.stopPropagation();
    setTileState(prevValue => {
      const newArray = [];
      for(let i=0;i<10;i++) { i!=index ? newArray.push(prevValue[i]) : newArray.push(!prevValue[i]) }
      return newArray;
    })
  }

  return (
    <div className='main'>
      <div className='text'>
        <h1> Tenzies </h1>
        <p> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>      
        <Numbers tile={tileState} numbers = {num} toggleNum = {toggleNum}/>
      <button className="roll" onClick={rollDice}> Roll </button>
      { num.every( v => v === num[0]) && tileState.every(v => v === true) && <Confetti
      />}
    </div>
    
  );
}

export default App;

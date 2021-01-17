/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function TicTacToeCell(props) {
  let [mark, marking] = useState("　");
  if (mark !== "　") {
    return (
      <td>
        {mark}
      </td>
    );
  }
  return (
    <td onClick={()=>{
      let m = [...props.matrix[0]];
      m[props.pos] = props.turnData[0]%2;
      props.matrix[1](m);
      props.turnData[1](props.turnData[0]+1);
      if (props.turnData[0]%2 === 0) {
        marking("X");
      } else {
        marking("O");
      }
    }}>{mark}</td>
  );
}

function App() {
  // let [num, changeNum] = useState(0);
  let [turn, turnOver] = useState(1);
  let [matrix, setMatrix] = useState([NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  const checkWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function isWin() {
    for (let i=0; i<8; i++) {
      if (matrix[checkWin[i][0]]!==NaN && matrix[checkWin[i][0]]===matrix[checkWin[i][1]] && matrix[checkWin[i][1]]===matrix[checkWin[i][2]]) {
        if (matrix[checkWin[i][0]]===0) {
          console.log("X Win")
        } else {
          console.log("O Win")
        }
      }
    }
  }

  return (
    <div className="App">
      {/* <h1>{num}</h1>
      <button onClick={()=>{changeNum(--num)}}>-1</button>
      <button onClick={()=>{changeNum(++num)}}>+1</button> */}
      <table onClick={isWin} className="table" border="1">
        <tr>
          <TicTacToeCell pos="0" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="1" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="2" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
        </tr>
        <tr>
          <TicTacToeCell pos="3" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="4" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="5" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
        </tr>
        <tr>
          <TicTacToeCell pos="6" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="7" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
          <TicTacToeCell pos="8" turnData={[turn, turnOver]} matrix={[matrix, setMatrix]} />
        </tr>
      </table>
    </div>
  );

}

export default App;
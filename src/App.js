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

  return (
    <div className="App">
      {/* <h1>{num}</h1>
      <button onClick={()=>{changeNum(--num)}}>-1</button>
      <button onClick={()=>{changeNum(++num)}}>+1</button> */}
      <table className="table" border="1">
        <tr>
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
        </tr>
        <tr>
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
        </tr>
        <tr>
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
          <TicTacToeCell turnData={[turn, turnOver]} />
        </tr>
      </table>
    </div>
  );

}

export default App;

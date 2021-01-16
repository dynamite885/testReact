import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let [num, changeNum] = useState(0);
  return (
    <div className="App">
      {/* <h1>{num}</h1>
      <button onClick={()=>{changeNum(--num)}}>-1</button>
      <button onClick={()=>{changeNum(++num)}}>+1</button> */}
      <table border="1">
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </table>
    </div>
  );

}

export default App;

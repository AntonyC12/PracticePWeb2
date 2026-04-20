import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function sum() {
    const sum = numberOne + numberTwo;
    window.alert('The sum is: ' + sum);
  }

  return (
    <>
      <form>
        <h1>Calculator for Two Number</h1>
        <br />
        <br />
        <h2>Number 1</h2>
        <input type="number" onChange={(e) => setNumberOne(Number(e.target.value))} />
        <br />
        <br />
        <h2>Number 2</h2>
        <input type="number" onChange={(e) => setNumberTwo(Number(e.target.value))} />
        <br />
        <br />
        <button type="submit" onClick={sum}>Sum</button>
        <br />
      </form>
    </>
  )
}

export default App
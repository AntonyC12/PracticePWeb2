import { useState } from "react";

function BasicCalculator({ goReturn }) {

    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);

    function sum(e) {
        e.preventDefault();
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
                <button onClick={() => goReturn('home')}> Back to Home</button>
            </form>
        </>
    )
}
export default BasicCalculator;

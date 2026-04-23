import { useState } from 'react';

function Home({ goPage }) {
  return (
    <>
      <h1>Home Page</h1>
      <br />
      <br />
      <button onClick={() => goPage('basicCalculator')}>Application 1</button>
      <button onClick={() => goPage('completeCalculator')}>Application 2</button>
    </>
  )
}

export default Home;
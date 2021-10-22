import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  const [quotes, setQuotes] = useState(``);

  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.content} —${data.author}`);
      // setQuotes(`${data.content} —${data.author}`);
    });
  return (
    <div className="wrapper">
      <h1> {quotes} </h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;

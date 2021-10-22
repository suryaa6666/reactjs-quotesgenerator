import React, { useState } from "react";
import { Card, Button, CardContent } from "@mui/material";
// import styles from 'Styles.js';

function App() {
  const [quotes, setQuotes] = useState(``);

  const GenerateQuotes = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(`${data.content} —${data.author}`);
        setQuotes(`${data.content} —${data.author}`);
      });
  };

  return (
    <div>
      <Card
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
        sx={{ maxWidth: 500 }}
      >
        <CardContent>
          <h1> {quotes} </h1>
          <Button variant="contained" onClick={GenerateQuotes}>
            {" "}
            Generate Quotes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

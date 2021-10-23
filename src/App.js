import React, { useState } from "react";
import { Card, Button, CardContent } from "@mui/material";

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
    <div style={{backgroundColor: "#5EFAF7", width: "100" }}>
      <Card
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-100%)",
        }}
        sx={{ width: '100%', maxHeight: 200, overflowY: 'scroll'}}
      >
        <CardContent>
          <h2> {quotes} </h2>
        </CardContent>
      </Card>
      <Card
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,100%)",
        }}
        sx={{ maxWidth: 500 }}
      >
        <CardContent>
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

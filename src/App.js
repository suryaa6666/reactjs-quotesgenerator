import React, { useState } from "react";
import { Button, Box, ChakraProvider } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

// import { Card, Button, CardContent } from "@mui/material";

import "./App.css";

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

  const DukungDeveloper = () => {
    window.open("http://saweria.co/suryaelidanto");
  };

  return (
    //   <div style={{ backgroundColor: "#5EFAF7", width: "100"}}>
    //     <Card
    //       style={{
    //         position: "absolute",
    //         left: "50%",
    //         top: "50%",
    //         transform: "translate(-50%,-100%)",
    //       }}
    //       sx={{ width: "100%", maxHeight: 200, overflowY: "scroll" }}
    //     >
    //       <CardContent>
    //         <h2> {quotes} </h2>
    //       </CardContent>
    //     </Card>
    //     <Card
    //       style={{
    //         position: "absolute",
    //         left: "50%",
    //         top: "50%",
    //         transform: "translate(-50%,100%)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         flexDirection: "column",
    //       }}
    //       sx={{ maxWidth: 1000 }}
    //     >
    //       <CardContent>
    //         <Button variant="contained" onClick={GenerateQuotes}>
    //
    //           Generate Quotes
    //         </Button>
    //       </CardContent>
    //       <CardContent>
    //         <Button
    //           style={{ alignSelf: "center" }}
    //           color="success"
    //           variant="contained"
    //           onClick={DukungDeveloper}
    //         >
    //
    //           Dukung Developer
    //         </Button>
    //       </CardContent>
    //     </Card>
    //   </div>
    <ChakraProvider>
      <Box pos="absolute" right="0">
        <Button
          style={{ backgroundColor: "#ECF2F6", border: "1px solid black" }}
        >
          <FaHeart style={{ color: "red", marginRight: "10" }} /> Support
        </Button>
      </Box>
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, 1500%)",
        }}
      >
        <Button
          style={{ backgroundColor: "#8BD3DD", border: "1px solid black" }}
        >
          Generate Quotes
        </Button>
      </Box>
      <Box style={{left: '50%', top: 50, transform: "translate(-50%)", display: 'flex', flex: 1, minWidth: 800, minHeight: 400, maxWidth: 800, maxHeight: 400, backgroundColor: "red", position: 'absolute' }}>

      </Box>
    </ChakraProvider>
  );
}

export default App;

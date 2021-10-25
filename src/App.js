import React, { useState } from "react";
import { Button, Box, ChakraProvider, Textarea } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(``);
  const [isGenerating, setIsGenerating] = useState(false);

  const GenerateQuotes = () => {
    setIsGenerating(true);
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(`${data.content} —${data.author}`);
        setIsGenerating(false);
      });
  };

  const CopyQuotes = () => {
    toast.success("Successfully copied!");
    var quotesArea = document.getElementById("quotesArea");
    navigator.clipboard.writeText(quotesArea.textContent);
  };

  const SupportDeveloper = () => {
    window.open("http://saweria.co/suryaelidanto");
  };

  return (
    <ChakraProvider>
      <Toaster position="top-center" reverseOrder={true} />
      <Box
        style={{
          display: "flex",
          flex: 1,
          height: 50,
        }}
        boxShadow="md"
        bg="#8BD3DD"
        p="6"
      >
        <Box style={{ color: "white", alignSelf: "center" }}>
          <h1 style={{fontSize: 20}}>
            {" "}
            <b> BeQuotes </b>
          </h1>
        </Box>
        <Box position="absolute" right="6" style={{ alignSelf: "center" }}>
          <Button
            style={{ backgroundColor: "#ECF2F6", border: "1px solid black" }}
            onClick={SupportDeveloper}
          >
            <FaHeart
              style={{ color: "red", marginRight: "10", fontSize: 14 }}
            />{" "}
            <p style={{ fontSize: 14 }}>Support </p>
          </Button>
        </Box>
      </Box>

      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, 770%)",
        }}
      >
        <Button
          isLoading={isGenerating}
          loadingText="Generating"
          onClick={GenerateQuotes}
          style={{
            backgroundColor: "#8BD3DD",
            border: "1px solid black",
            fontSize: 20,
            padding: 25,
          }}
          id="generateQuotesButton"
        >
          Generate Quotes
        </Button>
      </Box>
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, 910%)",
        }}
      >
        <Button
          onClick={CopyQuotes}
          style={{
            backgroundColor: "#FAAF2A",
            border: "1px solid black",
            fontSize: 20,
            padding: 25,
          }}
        >
          Copy To Clipboard
        </Button>
      </Box>
      <Box
        style={{
          left: "50%",
          top: 120,
          transform: "translate(-50%)",
          display: "flex",
          flex: 1,
          width: "100%",
          maxWidth: 1000,
          position: "absolute",
        }}
      >
        <Textarea
          style={{ fontSize: 30}}
          height="275"
          resize="none"
          placeholder="Quotes goes here..."
          value={quotes}
          onChange={(quotes) => ""}
          id="quotesArea"
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;

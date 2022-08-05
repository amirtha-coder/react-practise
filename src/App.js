import Stack from "@mui/material/Stack";
import "./App.css";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const App = () => {
  const arrayOfColours = ["#ffe74cff", "#ff5964ff", "#6bf178ff", "#35a7ffff"];
  const [colourChange, setColourChange] = useState("ff5964ff");
  const handleColourChange = (event) => {
    const randomColourIndex = Math.floor(Math.random() * arrayOfColours.length);
    const newColour = arrayOfColours[randomColourIndex];
    setColourChange(newColour);
  };
  return (
    <Stack>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: colourChange,
          opacity: [0.9, 0.8, 0.7],
        }}
      />
      <Box>
        <Button variant="contained" onClick={handleColourChange}>
          Change Colour
        </Button>
      </Box>
    </Stack>
  );
};

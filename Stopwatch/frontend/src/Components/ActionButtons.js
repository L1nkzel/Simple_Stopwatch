import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React from "react";

const ActionButtons = (props) => {
  return (
    <Box className="buttons">
      <Button variant="contained" id="startTimer" onClick={props.handleStart}>
        START
      </Button>
      <Button variant="contained" id="stopTimer" onClick={props.handleReset}>
        STOP
      </Button>
      <Button
        variant="contained"
        id="ResetTimer"
        onClick={props.handlePauseResume}
      >
        {props.isPaused ? "RESUME" : "STOP"}
        START
      </Button>
    </Box>
  );
};

export default ActionButtons;

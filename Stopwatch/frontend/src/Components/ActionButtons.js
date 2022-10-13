import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React from "react";

const ActionButtons = () => {
  return (
    <box className="buttons">
      <button variant="contained" id="startTimer" onClick={props.handleStart}>
        START
      </button>
      <button variant="contained" id="stopTimer" onClick={props.handleReset}>
        STOP
      </button>
      <button
        variant="contained"
        id="ResetTimer"
        onClick={props.handlePauseResume}
      >
        {props.isPaused ? "RESUME" : "STOP"}
        START
      </button>
    </box>
  );
};

export default ActionButtons;

import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import React from "react";

const ActionButtons = (props) => {
  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
      <Button variant="contained" id="startTimer" onClick={props.handleStart}>
        START
      </Button>
      <Button
        variant="contained"
        id="ResetTimer"
        onClick={props.handlePauseResume}
      >
        {props.stop ? "RESUME" : "PAUSE"}

      </Button>
      <Button variant="contained" id="stopTimer" onClick={props.handleReset}>
        RESET
      </Button>
      </Stack>
    </Box>
  );
};

export default ActionButtons;

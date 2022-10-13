import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import React from "react";

const ActionButtons = (props) => {
  return (
    <Box>
      <Stack
      marginTop={2}
      
      direction={"row"} spacing={2}>
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
      <Stack sx={{
        margin: "20px",
        flexGrow:1,
        display:"flex",
        alignItems:"center"        
      }}>
      <Button 
      variant="contained" 
      id="save" 
      sx={{
        width:"90px"
      }} 
      onClick={props.handleSave}>SAVE</Button>

      </Stack>
    </Box>
  );
};

export default ActionButtons;

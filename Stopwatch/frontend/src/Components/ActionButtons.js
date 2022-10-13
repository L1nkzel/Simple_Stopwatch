import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import React from "react";

const ActionButtons = (props) => {
  return (
    <Box>
      <Stack
      marginTop={2}
      
      direction={"row"} spacing={2}>
      <Button sx={{
        bgcolor:"rgba(19, 160, 7, 1)",
        ":hover":{bgcolor:"rgb(19, 120, 7, 1)"}
        }}  variant="contained" id="startTimer" onClick={props.handleStart}>
        {props.stop ? "START" : "STOP"}
      </Button>

      <Button  variant="contained" id="stopTimer" onClick={props.handleReset}>
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

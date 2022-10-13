import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import Timer from "./Timer";

const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start && stop === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, stop]);

  const handleStart = () => {
    setStart(true);
    setStop(false);
  };

  const handlePauseResume = () => {
    setStop(!stop);
  };

  const handleReset = () => {
    setStart(false);
    setTime(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Box sx={{}}>
        <Timer time={time} />
      </Box>
      
      <Box sx={{}}>
        <ActionButtons
          start={start}
          stop={stop}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </Box>
    </Box>
  );
};

export default StopWatch;

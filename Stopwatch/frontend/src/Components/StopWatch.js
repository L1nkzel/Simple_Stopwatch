import { Box } from "@mui/material";


import { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import Timer from "./Timer";

const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [time, setTime] = useState(0);

  const [savedTime, setSavedTime] = useState([]);

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
    console.log(time);
    
  };

  const handleReset = () => {
    setStart(false);
    setTime(0);
  }

useEffect(() => {

  const fetchData = async () => {
    
    const result = await fetch("http://localhost:3001/time/")
    const jsonResult = await result.json();
    
    setSavedTime(jsonResult)
   
  }
  fetchData()
  
}, [])

  
  
  const handleSave = async() =>{
    const data = 
    {
      time: time.toString()
    }
   
    
 
  
    
    
    const result = await fetch('http://localhost:3001/time/', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
      
  })
    const resultJson = await result.json();
    setSavedTime(prev => [...prev, resultJson])
    
}

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
          handleSave={handleSave}
         
        />
      </Box>
      <Box>
        {savedTime.map(time => <Box key={time.id}>
          <Box>
            {time.time}
          </Box>
        </Box>)}
      </Box>
    </Box>
  );
};

export default StopWatch;

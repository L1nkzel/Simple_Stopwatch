
import  {Box, Card} from "@mui/material";

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
    setStop(!stop);
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

        <Card 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: 10,
                    flexWrap: "wrap",
                    maxWidth: 500,
                    padding: 2,
                    margin:"auto",
                    backgroundColor: "rgba(209, 220, 205, 0.81)",
                    borderRadius: 8,
                    mt:10
                  
                  }}>
      <Card sx={{
        display: "flex",
        fontSize:36, 
        fontWeight:"bold",
        justifyContent: "center",
        bgColor: "rgba(232, 243, 226, 0)",
        borderRadius: 4,
        padding: 1,
        width: 300


    }}>
        <Timer time={time} />
      </Card>
      
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
    

      </Card>

  );
};

export default StopWatch;

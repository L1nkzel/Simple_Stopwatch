import express from "express";
import timeRoute from "./routes/timeRoute.js"


const server = express();
const PORT = 3001;

server.use(express.json())
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use("/time", timeRoute)




server.listen(PORT, () => console.log(`Server started on ${PORT}`))
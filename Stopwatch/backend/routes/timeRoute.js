import  express  from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const route = express.Router();


route.get("/", async (req, res) => {
  const time = await prisma.stoptime.findMany();
  res.json(time)
})

route.post("/",  async (req,res) =>{
  const time = await prisma.stoptime.create({
    data: {
      time: parseInt(req.body.time)
    }
  })
  res.json(time)
})

export default route;
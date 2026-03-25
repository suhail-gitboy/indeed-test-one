import express from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}))


import "../backend/Configdb.js"
import { GETaiData, Getalldata, Savedatata } from "./controllers/main.controller.js"
app.get("/", (req, res) => {
    res.send("hellooo")

})


app.post("/api/ask-ai", GETaiData)
app.get("/api/history", Getalldata)
app.post("/api/save", Savedatata)



app.listen(process.env.PORT, () => {
    console.log("running on port", process.env.PORT);

})
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3001;

console.log("hello")

app.use(cors({origin:"*"}));
app.get("/", (req,res) => {
response.writeHead(200, {"Content-Type": "application/json"});
res.send(JSON.stringify({"msg":"hello"}));
})



app.get("/media", (req, res) => {
  console.log("endroute");
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=2023-06-12`).then((response) => {
    console.log(response.data);
    res.send("success")}).catch((err) => res.send("success"));
  })

 

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;



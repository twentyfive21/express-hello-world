const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3001;

app.use(cors({origin:"*"}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse  application/json 
app.use(bodyParser.json())

app.get("/", (req,res) => {
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch(err=>res.send({message: "Error: Could not get data"}));
});

app.post("/media", (req, res) => {
  const date = req.body.date;
  axios
  .get(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`
    )
    .then((response) => {
    res.send(response.data);
    })
    .catch((err) => res.send({ msg: "failed to get data"}));
  });


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;



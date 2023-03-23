const express = require("express");
const _ = require("lodash");
const cors = require("cors");
const questions = require("./data.json");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/questions", (req, res) => {
    const randQuestions = _.sampleSize(questions, 10);
    res.json(randQuestions);
});

app.listen(port, () => console.log("server started at port ", port));

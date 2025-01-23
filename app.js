import express from "express";

const app = express();
const PORT = 8080;


app.get("/hello", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/good-bye", (req, res) => {
    res.send("<h1>Good Bye</h1>");
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
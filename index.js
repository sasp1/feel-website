const express = require("express");
const app = express();

const port = 9000;
app.listen(port, () => {
    console.log("Listening on port ", port);
});


app.get("/", (req, res) => {
    res.send("<H1>Hello World!</H1>")
});
const express = require("express");
const port = 8080;
//const host = "localhost";

const server = express();

server.get("/", (request, response) => {
    response.send("<h1>Home</h1>");
});

server.listen(port, () => {
    console.log(`servidor está de na url: http://localhost:${port}`);
    console.log("Para derrubar o servidor  aperte CTRL + C");
})
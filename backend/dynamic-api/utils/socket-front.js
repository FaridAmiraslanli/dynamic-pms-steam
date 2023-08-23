const express = require("express");

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const server = require("http").createServer();
const socketFront = require("socket.io")(server);
socketFront.on("connection", (socket) => {
  console.log("Connect-sock-frt");
  socket.on("data", (data) => {
    console.log("data_", data);
  });
});
socketFront.emit("event", (data) => {
  data = {
    name: "Mamed",
    age: 21,
  };
  // console.log("event_SET", data);
});
socketFront.on("data", (data) => {
  console.log("data_listen", data);
});

server.listen(3030, () => {
  console.log("Conencted Socket-Front");
});

// const socketIO = require("socket.io");

// const host = "http://localhost:3030";
// const socketFront = socketIO(host);

// socketFront.on("connect", () => {
//   console.log(`Connected to Socket`);
// });

module.exports = socketFront;

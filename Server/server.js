const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    allowedHeader: [],
  },
});

server.listen(3000, () => {
  console.log("3000 da iwlayapti");
  io.on("connection", (socket) => {
    console.log("Auth value: " + socket.id);
    socket.on("sendNotification", function (details) {
      socket.broadcast.emit("sendNotification", details);
    });
  });
});

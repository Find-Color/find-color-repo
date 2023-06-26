const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Handle notification event
  socket.on("newNotification", (notification) => {
    console.log("New notification:", notification);

    // Broadcast the notification to all connected clients
    io.emit("notification", notification);
  });

  // Handle new comment event
  socket.on("newComment", (comment) => {
    console.log("New comment:", comment);

    // Emit the 'newNotification' event with the comment data
    io.emit("newNotification", comment);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

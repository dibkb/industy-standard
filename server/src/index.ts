import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import socket from "./socket";
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "https://localhost:5173",
    credentials: true,
  },
});

httpServer.listen(8000, () => {
  console.log(`Server running on port 8000 🥂`);
  socket({ io });
});

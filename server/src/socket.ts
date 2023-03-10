import { nanoid } from "nanoid";
import { Server, Socket } from "socket.io";
const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
  },
};
const rooms: Record<string, { name: string }> = {};

function socket({ io }: { io: Server }) {
  io.on(EVENTS.connection, (socket: Socket) => {
    console.log("Socet running ");
  });
}
export default socket;

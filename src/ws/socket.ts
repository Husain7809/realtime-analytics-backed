import { Server } from "socket.io";
import { generateMockData } from "../utils/mockData";

export const socketServer = (server) => {
    let io;
    io = new Server(server, {
        transports: ["websocket"],
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log("Client connected:", socket.id);
        // mock data every 2 seconds
        const interval = setInterval(() => {
            const data = generateMockData();
            socket.emit("metricsUpdate", data);
        }, 2000);

        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
            clearInterval(interval);
        });
    });
};

import express, { Application } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import routes from './routes';
import { createServer } from "http";
import { socketServer } from "./ws/socket";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const server = createServer(app);

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/v1/api', routes);

socketServer(server);

server.listen(process.env.PORT, () => {
    console.warn(`API listening on PORT ${process.env.PORT}`);
});
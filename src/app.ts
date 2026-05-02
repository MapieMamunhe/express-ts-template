import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import userRoutes from "./routes/user.routes";
import participantesRoutes from "./routes/participant.routes";
import eventoRoutes from "./routes/evento.routes";
import { authenticationHandler } from "./middlewares/authenticationHandler";

// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.use(authenticationHandler);


app.use("/", index);
app.use("/user", userRoutes);
app.use("/participantes", participantesRoutes);
app.use("/evento", eventoRoutes);




app.use(errorNotFoundHandler);
app.use(errorHandler);

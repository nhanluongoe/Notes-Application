import { default as express } from "express";
import { default as hbs } from "hbs";
import * as path from "path";
// import * as favicon from 'server-favicon';
import { default as logger } from "morgan";
import { default as cookieParser } from "cookie-parser";
import { default as bodyParser } from "body-parser";
import * as http from "http";
import { approotdir } from "./approotdir.mjs";
const __dirname = approotdir;
import {
  normalizePort,
  onError,
  onListening,
  handle404,
  basicErrorHandler,
} from "./appsupport.mjs";

import { router as indexRouter } from "./routes/index.mjs";
// import { router as notesRouter } from "./routes/notes.mjs";

export const app = experss();

// view engine setup
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "partials"));

// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// router function lists
app.use("/", indexRouter);
// app.use("/notes", notesRouter);

// error handlers
// catch 404 and forward to error handler
app.use(handle404);
app.use(basicErrorHandler);

export const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

export const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
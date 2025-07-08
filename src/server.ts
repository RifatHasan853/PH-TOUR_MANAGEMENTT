import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Connected to MongoDB");
    server = app.listen(envVars.PORT, () => {
      console.log("Server is running on port ", envVars.PORT);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
startServer();
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection, shutting down server", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
process.on("SIGTERM", () => {
  console.log("Sinterm signal recived, shutting down server");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
process.on("SIGTERM", () => {
  console.log("Sinterm signal recived, shutting down server");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
process.on("SIGINT", (err) => {
  console.log("SIGINT SIGNAL RECIVED, shutting down server", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

//throw new Error("i forgot to handle this local error!");
//Promise.reject(new Error("I forgot to catch this promise!"));

import connectToMongo from "./database/db.js";
import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import cors from "cors";

connectToMongo();
const app = express();
const port = 5000;

//* middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://blinkbeat.net", "http://localhost:5173"], // Allow both deployed & local frontend
    credentials: true, // Allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://blinkbeat.net");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//* Available routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";

//user defined modules
import connectDB from "./db/connectdb.js";
import router from "./routes/user.route.js";

//server configuration
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
connectDB();

//routes
app.use("/users", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;

import express from "express";
import authRoutes from "./routes/authRoute.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Connected on Port 8000!");
});

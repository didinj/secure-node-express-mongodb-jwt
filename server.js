import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import postRoutes from "./routes/posts.js";

// Load environment variables
config();
connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/posts", postRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

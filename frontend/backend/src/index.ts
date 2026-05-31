import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { enquiryRouter } from "./routes/enquiry";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  }),
);
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok" }));
app.use("/api", enquiryRouter);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

import express, { Application, Request, Response } from "express";
import api from "./api/api";
import cors from "cors";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({});
});
app.get("/vote", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).sendFile(path.join(__dirname, ".;
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error occured: ${error.message}`);
  }
}

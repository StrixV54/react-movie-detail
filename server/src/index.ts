import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import routes from "./routes/route";
import { MongoClient, MongoClientOptions } from "mongodb";

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world! Please use correct route to use api.");
});
app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const client = new MongoClient(process.env.MONGO_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);

export const collection = client.db("MovieDB").collection("movies");

async function connectToMongoDB() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}
connectToMongoDB();

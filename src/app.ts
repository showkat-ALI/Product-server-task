import cors from "cors";
import express, { Application } from "express";
import { ProductRoute } from "./app/modules/studentModule/product.route";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);

export default app;

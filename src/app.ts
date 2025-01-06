import cors from "cors";
import express, { Application } from "express";
import { ProductRoute } from "./app/modules/productModule/product.route";
import { orderRoute } from "./app/modules/ordersModule/order.route";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/orders", orderRoute);

export default app;

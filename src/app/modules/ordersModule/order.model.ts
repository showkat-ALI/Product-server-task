import { Schema, model } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder, OrderModel>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
// Creating a custom static method

export const Order = model<TOrder, OrderModel>("Order", orderSchema);

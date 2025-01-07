import { Schema, model } from "mongoose";
import { OrderModel, TOrder } from "./order.interface";
import { Product } from "../productModule/product.model";

const orderSchema = new Schema<TOrder, OrderModel>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
// Creating a custom static method
orderSchema.statics.isproductExist = async function (id: string) {
  const existingProduct = await Product.findById(id);

  return existingProduct;
};
export const Order = model<TOrder, OrderModel>("Order", orderSchema);

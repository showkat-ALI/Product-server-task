import { Schema, model } from "mongoose";
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const ProductSchema = new Schema<TProduct, ProductModel>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Creating a custom static method
ProductSchema.statics.isproductExist = async function (id: string) {
  const existingProduct = await Product.findOne({ id });
  return existingProduct;
};

export const Product = model<TProduct, ProductModel>("Product", ProductSchema);

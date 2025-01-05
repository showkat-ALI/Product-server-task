import { TProduct } from "./product.interface";
import { Product } from "./product.model";
const createProductToDB = async (ProductDATA: TProduct) => {
  if (await Product.isproductExist(ProductDATA.id)) {
    throw new Error("Product already exists!");
  }
  const result = await Product.create(ProductDATA);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.aggregate([
    {
      $match: { id },
    },
  ]);
  return result;
};
const updateAProductFromDB = async (id: string, updatedData: TProduct) => {
  const product = await Product.findOne({ id });
  const result = await Product.findByIdAndUpdate(product._id, updatedData, {
    new: true,
    runValidators: true,
  }); // Return the updated document runValidators: true // Ensure the update adheres to schema validation });
  return result;
};
export const productServices = {
  createProductToDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateAProductFromDB,
};

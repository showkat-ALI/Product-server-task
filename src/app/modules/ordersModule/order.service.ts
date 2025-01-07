import { TProduct } from "../productModule/product.interface";
import { Product } from "../productModule/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
const createOrderToDB = async (OrderDATA: TOrder) => {
  const product: TProduct = await Order.isproductExist(OrderDATA.productId);
  if (!product) {
    throw new Error("Product does not exist");
  }

  if (product?.inventory?.quantity >= OrderDATA.quantity) {
    // Calculate the new quantity
    const newQuantity = product?.inventory?.quantity - OrderDATA.quantity;
    const inStock = newQuantity > 0;

    // Update the product inventory
    await Product.updateOne(
      { _id: OrderDATA.productId },
      {
        $set: {
          "inventory.quantity": newQuantity,
          "inventory.inStock": inStock,
        },
      }
    );

    // Create the order
    const result = await Order.create(OrderDATA);
    return result;
  } else {
    throw new Error("Insufficient quantity available in inventory");
  }
};
const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};
const getordersbySerachFromDB = async (searchTerm: string) => {
  const searchCriteria = new RegExp(searchTerm, "i");

  const result = await Order.find({ $or: [{ email: searchCriteria }] });
  return result;
};
// const updateAProductFromDB = async (id: string, updatedData: TProduct) => {
//   const product = await Product.findOne({ id });
//   const result = await Product.findByIdAndUpdate(product?._id, updatedData, {
//     new: true,
//     runValidators: true,
//   }); // Return the updated document runValidators: true // Ensure the update adheres to schema validation });
//   return result;
// };
// const deleteProductFromDB = async (id: string) => {
//   const product = await Product.findOne({ id });
//   const result = await Product.findByIdAndDelete(product?._id); // Return the updated document runValidators: true // Ensure the update adheres to schema validation });
//   return result;
// };
// const getSingleProductsFromDB = async (productID: string) => {
//   const result = await Product.aggregate([
//     {
//       $match: { productID },
//     },
//   ]);
//   return result;
// };
export const orderServices = {
  createOrderToDB,
  getAllOrderFromDB,
  getordersbySerachFromDB,
  // getAllProductsFromDB,
  // getSingleProductsFromDB,
  // updateAProductFromDB,
  // deleteProductFromDB,
  // getProductsbySerachFromDB,
};

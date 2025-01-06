import { TOrder } from "./order.interface";
import { Order } from "./order.model";
const createOrderToDB = async (OrderDATA: TOrder) => {
  const result = await Order.create(OrderDATA);
  return result;
};
const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};
// const getProductsbySerachFromDB = async (searchTerm: string) => {
//   // const result = await Product.aggregate([
//   //   {
//   //     $match: { id },
//   //   },
//   // ]);
//   const searchCriteria = new RegExp(searchTerm, "i");

//   const result = await Product.find({ $or: [{ name: searchCriteria }] });
//   return result;
// };
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
  // getAllProductsFromDB,
  // getSingleProductsFromDB,
  // updateAProductFromDB,
  // deleteProductFromDB,
  // getProductsbySerachFromDB,
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const product_model_1 = require("../productModule/product.model");
const order_model_1 = require("./order.model");
const createOrderToDB = (OrderDATA) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const product = yield order_model_1.Order.isproductExist(OrderDATA.productId);
    if (!product) {
        throw new Error("Product does not exist");
    }
    if (((_a = product === null || product === void 0 ? void 0 : product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) >= OrderDATA.quantity) {
        // Calculate the new quantity
        const newQuantity = ((_b = product === null || product === void 0 ? void 0 : product.inventory) === null || _b === void 0 ? void 0 : _b.quantity) - OrderDATA.quantity;
        const inStock = newQuantity > 0;
        // Update the product inventory
        yield product_model_1.Product.updateOne({ _id: OrderDATA.productId }, {
            $set: {
                "inventory.quantity": newQuantity,
                "inventory.inStock": inStock,
            },
        });
        // Create the order
        const result = yield order_model_1.Order.create(OrderDATA);
        return result;
    }
    else {
        throw new Error("Insufficient quantity available in inventory");
    }
});
const getAllOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getordersbySerachFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const searchCriteria = new RegExp(searchTerm, "i");
    const result = yield order_model_1.Order.find({ $or: [{ email: searchCriteria }] });
    return result;
});
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
exports.orderServices = {
    createOrderToDB,
    getAllOrderFromDB,
    getordersbySerachFromDB,
    // getAllProductsFromDB,
    // getSingleProductsFromDB,
    // updateAProductFromDB,
    // deleteProductFromDB,
    // getProductsbySerachFromDB,
};

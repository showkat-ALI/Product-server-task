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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProductToDB = (ProductDATA) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield product_model_1.Product.isproductExist(ProductDATA.id)) {
        throw new Error("Product already exists!");
    }
    const result = yield product_model_1.Product.create(ProductDATA);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
const getProductsbySerachFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Product.aggregate([
    //   {
    //     $match: { id },
    //   },
    // ]);
    const searchCriteria = new RegExp(searchTerm, "i");
    const result = yield product_model_1.Product.find({ $or: [{ name: searchCriteria }] });
    return result;
});
const updateAProductFromDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOne({ id });
    const result = yield product_model_1.Product.findByIdAndUpdate(product === null || product === void 0 ? void 0 : product._id, updatedData, {
        new: true,
        runValidators: true,
    }); // Return the updated document runValidators: true // Ensure the update adheres to schema validation });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOne({ id });
    const result = yield product_model_1.Product.findByIdAndDelete(product === null || product === void 0 ? void 0 : product._id); // Return the updated document runValidators: true // Ensure the update adheres to schema validation });
    return result;
});
const getSingleProductsFromDB = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.aggregate([
        {
            $match: { productID },
        },
    ]);
    return result;
});
exports.productServices = {
    createProductToDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateAProductFromDB,
    deleteProductFromDB,
    getProductsbySerachFromDB,
};

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const crateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: ProductDATA } = req.body;
        const zodParsedData = product_validation_1.default.parse(ProductDATA);
        const result = yield product_service_1.productServices.createProductToDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: ProductDATA } = req.body;
        const zodParsedData = product_validation_1.default.parse(ProductDATA);
        const result = yield product_service_1.productServices.createProductToDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products are retrieved succesfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const deleteAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productID } = req.params;
        yield product_service_1.productServices.deleteProductFromDB(productID);
        res.status(200).json({
            success: true,
            message: "Product is deleted successfully",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const updateAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedData = req.body;
    const productID = req.params.productID;
    try {
        const result = yield product_service_1.productServices.updateAProductFromDB(productID, updatedData);
        res.status(200).json({
            success: true,
            message: "Product is updated succesfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const getASingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productID } = req.params;
        const result = yield product_service_1.productServices.getSingleProductsFromDB(productID);
        res.status(200).json({
            success: true,
            message: "Product retrieve Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const getProductsBYsearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchItem = req.query.searchTerm;
        console.log(searchItem);
        const result = yield product_service_1.productServices.getProductsbySerachFromDB(searchItem);
        res.status(200).json({
            success: true,
            message: `Products matching search term ${searchItem}fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
exports.productController = {
    crateProduct,
    getAllProducts,
    getProductsBYsearch,
    updateAProduct,
    deleteAProduct,
    getASingleProduct,
    createOrder,
};

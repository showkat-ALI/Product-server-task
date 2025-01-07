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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const crateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: OrderDATA } = req.body;
        const result = yield order_service_1.orderServices.createOrderToDB(OrderDATA);
        res.status(200).json({
            success: true,
            message: "Order is created successfully",
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
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { product: ProductDATA } = req.body;
//     const zodParsedData = productValidationSchema.parse(ProductDATA);
//     const result = await productServices.createProductToDB(zodParsedData);
//     res.status(200).json({
//       success: true,
//       message: "Product is created successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getAllOrderFromDB();
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
// const deleteAProduct = async (req: Request, res: Response) => {
//   try {
//     const { productID } = req.params;
//     await productServices.deleteProductFromDB(productID);
//     res.status(200).json({
//       success: true,
//       message: "Product is deleted successfully",
//       data: null,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
// const updateAProduct = async (req: Request, res: Response) => {
//   const updatedData = req.body;
//   const productID = req.params.productID;
//   try {
//     const result = await productServices.updateAProductFromDB(
//       productID,
//       updatedData
//     );
//     res.status(200).json({
//       success: true,
//       message: "Product is updated succesfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
// const getASingleProduct = async (req: Request, res: Response) => {
//   try {
//     const { productID } = req.params;
//     const result = await productServices.getSingleProductsFromDB(productID);
//     res.status(200).json({
//       success: true,
//       message: "Product retrieve Successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "something went wrong",
//       error: err,
//     });
//   }
// };
const getOrdersBYsearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchItem = req.query.email;
        const result = yield order_service_1.orderServices.getordersbySerachFromDB(searchItem);
        res.status(200).json({
            success: true,
            message: `Orders matching search term ${searchItem}fetched successfully!`,
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
exports.orderController = {
    crateProduct,
    getAllOrders,
    getOrdersBYsearch,
    // getAllProducts,
    // getProductsBYsearch,
    // updateAProduct,
    // deleteAProduct,
    // getASingleProduct,
    // createOrder,
};

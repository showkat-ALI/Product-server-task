"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.productController.crateProduct);
router.get("/", product_controller_1.productController.getAllProducts);
router.get("/search", product_controller_1.productController.getProductsBYsearch);
router.put("/:productID", product_controller_1.productController.updateAProduct);
router.delete("/:productID", product_controller_1.productController.deleteAProduct);
router.get("/:productID", product_controller_1.productController.getASingleProduct);
router.get("/", product_controller_1.productController.createOrder);
exports.ProductRoute = router;

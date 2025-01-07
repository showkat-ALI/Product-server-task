"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/", order_controller_1.orderController.crateProduct);
router.get("/", order_controller_1.orderController.getAllOrders);
router.get("/search", order_controller_1.orderController.getOrdersBYsearch);
// router.put("/:productID", productController.updateAProduct);
// router.delete("/:productID", productController.deleteAProduct);
// router.get("/:productID", productController.getASingleProduct);
// router.get("/", productController.createOrder);
exports.orderRoute = router;

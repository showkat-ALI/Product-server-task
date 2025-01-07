import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", orderController.crateProduct);
router.get("/", orderController.getAllOrders);
router.get("/search", orderController.getOrdersBYsearch);
// router.put("/:productID", productController.updateAProduct);
// router.delete("/:productID", productController.deleteAProduct);
// router.get("/:productID", productController.getASingleProduct);
// router.get("/", productController.createOrder);

export const orderRoute = router;

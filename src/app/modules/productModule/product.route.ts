import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.crateProduct);
router.get("/", productController.getAllProducts);
router.get("/search", productController.getProductsBYsearch);
router.put("/:productID", productController.updateAProduct);
router.delete("/:productID", productController.deleteAProduct);
router.get("/:productID", productController.getASingleProduct);
router.get("/", productController.createOrder);

export const ProductRoute = router;

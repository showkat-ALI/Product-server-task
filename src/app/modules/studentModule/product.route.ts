import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.crateProduct);
router.get("/", productController.getAllProducts);
router.get("/:productID", productController.getSingleProduct);
router.put("/:productID", productController.updateAProduct);

export const ProductRoute = router;
